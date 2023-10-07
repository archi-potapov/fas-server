// const db = require("../db");
import { pool } from "../db.js";
const { createHmac } = await import("node:crypto");

export class UserController {
  async createUser(req, res) {
    let isLoginContains = await pool.query(
      `SELECT EXISTS (SELECT 1 FROM person WHERE login = $1);`,
      [req.body.login]
    );
    let isEmailContains = await pool.query(
      `SELECT EXISTS (SELECT 1 FROM person WHERE email = $1);`,
      [req.body.email]
    );

    if (isEmailContains.rows[0].exists) {
      res.json({ error: "email_exists" });
      return;
    }

    if (isLoginContains.rows[0].exists) {
      res.json({ error: "login_exists" });
      return;
    }

    const session_key = createHmac("sha256", req.body.login)
      .update(req.body.password + req.body.email)
      .digest("hex");

    const newPerson = await pool.query(
      `INSERT INTO person (login, password, email, privilege_id, session_key) values ($1, $2, $3, $4, $5) RETURNING *`,
      [req.body.login, req.body.password, req.body.email, 0, session_key]
    );

    res.json({ session_key });
  }
  async isAuthorized(req, res) {
    // req.
    const user = await db.query(`SELECT 1 FROM person WHERE email = $1`, [req.body.login]);
    // res.json(users.rows);
    res.json(user);
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
