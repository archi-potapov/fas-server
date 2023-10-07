// const db = require("../db");
import { pool } from "../db";

export class UserController {
  async createUser(req, res) {
    const newPerson = await db.query(`INSERT INTO person (login, password) values ($1, $2) RETURNING *`, ["ttt", "ttt_pass"]);

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
