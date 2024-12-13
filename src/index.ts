import { Express, Request, Response } from "express";
import express from "express";
import * as path from "path";
import cors from "cors";

import { UserController } from "./api/user/UserController";
import { AuthController } from "./api/auth/AuthController";

export class AppController {
  private app: Express;
  private userController: UserController;
  private authController: AuthController;

  constructor() {
    this.app = express();
    this.userController = new UserController();
    this.authController = new AuthController();
    this.app.use(cors()); // Enable CORS
    this.app.use(express.json());
    this.app.use(
      express.static(path.resolve(__dirname, "../../frontend/public"))
    );
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.get(
      "/api/v1/users",
      this.userController.getUsers.bind(this.userController)
    );
    this.app.get(
      "/api/v1/users/:id",
      this.userController.getUserById.bind(this.userController)
    );
    this.app.post(
      "/api/v1/users",
      this.userController.createUser.bind(this.userController)
    );
    this.app.put(
      "/api/v1/users/:id",
      this.userController.updateUser.bind(this.userController)
    );
    this.app.delete(
      "/api/v1/users/:id",
      this.userController.deleteUserById.bind(this.userController)
    );
    this.app.post(
      "/api/v1/auth/register",
      this.authController.Register.bind(this.authController)
    );
    this.app.post(
      "/api/v1/auth/login",
      this.authController.Login.bind(this.authController)
    );
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
}
