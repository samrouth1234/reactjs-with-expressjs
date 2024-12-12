import { User } from "../models/User";
import pool  from "../../../config/db";

export class UserService {

  // Get All Users
  async getAllUsers(): Promise<User[]> {
    const result = await pool.query("SELECT * FROM users");
    return result.rows as User[];
  }

  // Get User By Id
  async getUserById(id: number): Promise<User>{
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0] as User;
  }

  // Create User
  async createUser(name: string, email: string): Promise<User>{
    const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
    return result.rows[0] as User;
  }

  // Update User
  async updateUser(id: number, name: string, email: string): Promise<User>{
    // first get the user by id
    const user = await this.getUserById(id);
    if(!user){
      throw new Error("User not found");
    }
    const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *", [name, email, id]);
    return result.rows[0] as User;
  }

  // Delete User by Id
  async deleteUser(id: number): Promise<User>{
    // first get the user by id
    const user = await this.getUserById(id);
    if(!user){
      throw new Error("User not found");
    }
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
    return result.rows[0] as User;
  }
  
}