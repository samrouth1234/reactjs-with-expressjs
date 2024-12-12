import { Express, Request, Response } from "express";
import express from "express";
import * as path from "path";
import { UserController } from "./api/user/controller/UserController";

export class AppController {
  private app: Express;
  private userController: UserController;

  constructor() {
    this.app = express();
    this.userController = new UserController();
    // Middleware for parsing JSON
    this.app.use(express.json());
    // Static files
    this.app.use(express.static(path.resolve(__dirname, "../../frontend/public")));
    // API routes
    this.setupRoutes();
    // React app for all other routes
    this.app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, "../../frontend/public/index.html"));
    });
  }

  private setupRoutes(): void {
    this.app.get("/api/v1/users", this.userController.getUsers.bind(this.userController));
    this.app.get("/api/v1/users/:id", this.userController.getUserById.bind(this.userController));
    this.app.post("/api/v1/users", this.userController.createUser.bind(this.userController));
    this.app.put("/api/v1/users/:id", this.userController.updateUser.bind(this.userController));
    this.app.delete("/api/v1/users/:id", this.userController.deleteUserById.bind(this.userController));
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
}