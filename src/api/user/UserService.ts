import { Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { User } from "./User";
import pool from "../../config/db";

export class UserService {
  // Get All Users
  async getAllUsers(): Promise<User[]> {
    const result = await pool.query("SELECT * FROM users");
    return result.rows as User[];
  }

  // Get User By Id
  async getUserById(id: number, res: Response): Promise<User> {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ message: "User not found" });
    }
    return result.rows[0] as User;
  }

  // Create User
  async createUser(
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<User> {
    try {
      // Check if the user already exists
      const existingUser = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );
      if (existingUser.rows.length > 0) {
        throw new Error("Email already exists");
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert the new user into the database
      const result = await pool.query(
        "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role, created_at",
        [name, email, hashedPassword, role]
      );

      // Extract and return the new user
      const newUser = result.rows[0] as User;
      return newUser;
    } catch (error: any) {
      console.error("Error creating user:", error.message);
      throw new Error("Unable to create user");
    }
  }

  // Update User
  async updateUser(
    id: number,
    name: string,
    email: string,
    res: Response
  ): Promise<User> {
    // first get the user by id
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (user.rows.length === 0) {
      res.status(404).json({ message: "User not found" });
    }
    if (!name || !email) {
      res.status(400).json({ message: "Name and Email are required" });
    }
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );
    return result.rows[0] as User;
  }

  // Delete User by Id
  async deleteUser(id: number, res: Response): Promise<User> {
    // first get the user by id
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (user.rows.length === 0) {
      res.status(404).json({ message: "User not found" });
    }
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0] as User;
  }
}
