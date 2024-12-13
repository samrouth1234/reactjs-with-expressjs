import { Request, Response } from "express";
import { UserService } from "./UserService";

export class UserController {
  // inject the UserService
  private userService: UserService;

  // create an constructor to initialize the UserService
  constructor() {
    this.userService = new UserService();
  }

  // Get All Users
  async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (err: any) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }

  // Get User By Id
  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      // parse the id from the request
      const user = await this.userService.getUserById(
        Number(req.params.id),
        res
      );
      res.status(200).json(user);
    } catch (err: any) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }

  // Create User
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.createUser(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role
      );
      res.status(201).json(user);
    } catch (err: any) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }

  // Update User
  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.updateUser(
        Number(req.params.id),
        req.body.name,
        req.body.email,
        res
      );
      res.status(200).json(user);
    } catch (err: any) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }

  // Delete user by Id
  async deleteUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.deleteUser(
        Number(req.params.id),
        res
      );
      res.status(200).json(user);
    } catch (err: any) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
}
