import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import pool from "../../config/db";
import { User } from "../user/User";

dotenv.config();

export class AuthService {
  // Register a new user
  async registerUser(req: Request, res: Response): Promise<void> {
    const { name, email, password, role = "user" } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );
      if (existingUser.rows.length > 0) {
        res.status(400).json({ message: "Email already exists" });
        return;
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert the new user into the database
      const result = await pool.query(
        "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role, created_at",
        [name, email, hashedPassword, role]
      );
      const newUser = result.rows[0] as User;

      // Respond with the new user's data
      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error: any) {
      console.error("Error registering user:", error.message);
      res.status(500).json({ message: "Server error" });
    }
  }

  // Login a user
  async loginUser(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    try {
      // Check if the user exists
      const userResult = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );

      // If the user does not exist, return an error
      if (userResult.rows.length === 0) {
        res.status(400).json({ message: "Invalid email !!" });
        return;
      }

      const user = userResult.rows[0];

      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Invalid passowrd !!" });
        return;
      }

      // Generate a JWT token
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
      );

      // Respond with the token and user details (optional)
      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error: any) {
      console.error("Error logging in user:", error.message);
      res.status(500).json({ message: "Server error" });
    }
  }

  // Get User Profile
  async getUserProfile(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.id);

    try {
      const result = await pool.query(
        "SELECT id, name, email, role FROM users WHERE id = $1",
        [userId]
      );

      if (result.rows.length === 0) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      res.status(200).json({ user: result.rows[0] });
    } catch (error: any) {
      console.error("Error fetching user profile:", error.message);
      res.status(500).json({ message: "Server error" });
    }
  }

  // Update User Profile
  async updateUserProfile(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.id);
    const { name, email, password } = req.body;

    try {
      // Check if the user exists
      const userResult = await pool.query("SELECT * FROM users WHERE id = $1", [
        userId,
      ]);
      if (userResult.rows.length === 0) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      let hashedPassword = userResult.rows[0].password; // Default to existing password
      if (password) {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);
      }

      const updatedResult = await pool.query(
        "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING id, name, email, role, created_at",
        [
          name || userResult.rows[0].name,
          email || userResult.rows[0].email,
          hashedPassword,
          userId,
        ]
      );

      res.status(200).json({
        message: "User profile updated successfully",
        user: updatedResult.rows[0],
      });
    } catch (error: any) {
      console.error("Error updating user profile:", error.message);
      res.status(500).json({ message: "Server error" });
    }
  }

  // Delete User Profile
  async deleteUserProfile(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.id);

    try {
      const result = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        [userId]
      );

      if (result.rows.length === 0) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      res.status(200).json({ message: "User profile deleted successfully" });
    } catch (error: any) {
      console.error("Error deleting user profile:", error.message);
      res.status(500).json({ message: "Server error" });
    }
  }

  // Logout user
  async logoutUser(req: Request, res: Response): Promise<void> {
    try {
      // Clear any stored JWT from cookies (if applicable)
      res.clearCookie("token");

      // Optional: Send a response message to confirm logout
      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.error("Error during logout:", error);
      res.status(500).json({ message: "Server error during logout" });
    }
  }
}
