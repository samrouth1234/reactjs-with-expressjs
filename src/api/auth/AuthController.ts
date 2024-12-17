import { Request, Response } from "express";
import { AuthService } from "./AuthService";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async Register(req: Request, res: Response): Promise<void> {
    try {
      await this.authService.registerUser(req, res);
    } catch (error: any) {
      console.error("Error in Register controller:", error);
      res.status(500).json({ message: "Server error during registration" });
    }
  }

  async Login(req: Request, res: Response): Promise<void> {
    try {
      await this.authService.loginUser(req, res);
    } catch (error: any) {
      console.error("Error in Login controller:", error);
      res.status(500).json({ message: "Server error during login" });
    }
  }

  // Get User Profile
  async GetUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userID = Number(req.params.id);
      if (isNaN(userID)) {
        res.status(400).json({ message: "Invalid user ID" });
        return;
      }
      await this.authService.getUserProfile(req, res);
    } catch (error: any) {
      console.error("Error in GetUserProfile controller:", error);
      res.status(500).json({ message: "Server error during get user profile" });
    }
  }

  // Update User Profile
  async UpdateUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userID = Number(req.params.id);
      if (isNaN(userID)) {
        res.status(400).json({ message: "Invalid user ID" });
        return;
      }
      await this.authService.updateUserProfile(req, res);
    } catch (error: any) {
      console.error("Error in UpdateUserProfile controller:", error);
      res
        .status(500)
        .json({ message: "Server error during update user profile" });
    }
  }

  // Delete User Profile
  async DeleteUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userID = Number(req.params.id);
      if (isNaN(userID)) {
        res.status(400).json({ message: "Invalid user ID" });
        return;
      }
      await this.authService.deleteUserProfile(req, res);
    } catch (error: any) {
      console.error("Error in DeleteUserProfile controller:", error);
      res
        .status(500)
        .json({ message: "Server error during delete user profile" });
    }
  }

  // Logout User
  async LogoutUser(req: Request, res: Response): Promise<void> {
    try {
      await this.authService.logoutUser(req, res);
    } catch (error: any) {
      console.error("Error in Logout controller:", error);
      res.status(500).json({ message: "Server error during logout" });
    }
  }
}
