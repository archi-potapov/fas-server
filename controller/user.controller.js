// const db = require("../db");
import { pool } from "../db.js";

export class UserController {
  async createUser(req, res) {
    const newPerson = await pool.query(
      `INSERT INTO person (login, password, email, privilege_id) values ($1, $2, $3, $4) RETURNING *`,
      [req.body.login, req.body.password, req.body.email, 0]
    );

    res.json(newPerson);
  }
  async getUsers(req, res) {
    // const users = await db.query(`SELECT * FROM person`)
    // res.json(users.rows);
    res.json("Success!!!");
  }
  async getOneUser(req, res) {}
  async updateUser(req, res) {}
  async deleteUser(req, res) {}
}
