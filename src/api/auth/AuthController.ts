import { Request, Response } from "express";
import { AuthService } from "./AuthService";

export class AuthController{
    
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async Register(req: Request, res: Response): Promise<void> {
    await this.authService.registerUser(req, res);
  }

  async Login(req: Request, res: Response): Promise<void> {
    await this.authService.loginUser(req, res);
  }
  
    // Get User Profile
    // async getUserProfile(req: Request, res: Response): Promise<void> {
    //   try {
    //     const user = await this.authService.getUserProfile(Number(req.params.id));
    //     res.status(200).json(user);
    //   } catch (err: any) {
    //     console.error(err.message);
    //     res.status(500).send("Server Error");
    //   }
    // }
  
    // Update User Profile
    // async updateUserProfile(req: Request, res: Response): Promise<void> {
    //   try {
    //     const user = await this.authService.updateUserProfile(Number(req.params.id), req.body.name, req.body.email);
    //     res.status(200).json(user);
    //   } catch (err: any) {
    //     console.error(err.message);
    //     res.status(500).send("Server Error");
    //   }
    // }
  
    // Delete User Profile
    // async deleteUserProfile(req: Request, res: Response): Promise<void> {
    //   try {
    //     const user = await this.authService.deleteUserProfile(Number(req.params.id));
    //     res.status(200).json(user);
    //   } catch (err: any) {
    //     console.error(err.message);
    //     res.status(500).send("Server Error");
    //   }
    // }
}