// const db = require("../db");
import { pool } from "../db.js";
const { createHmac } = await import("node:crypto");

export class UserController {
  async createUser(req, res) {
    let isContains = await pool.query(
      "EXISTS(SELECT 1 FROM person WHERE login=($1))",
      [req.body.login]
    );
    if (isContains) res.json("aboba");
    const session_key = createHmac("sha256", req.body.login)
      .update(req.body.password + req.body.email)
      .digest("hex");

    const newPerson = await pool.query(
      `INSERT INTO person (login, password, email, privilege_id, session_key) values ($1, $2, $3, $4, $5) RETURNING *`,
      [req.body.login, req.body.password, req.body.email, 0, session_key]
    );

    res.json({ session_key });
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
