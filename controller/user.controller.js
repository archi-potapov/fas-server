// const db = require("../db");
export class UserController {
  async createUser(req, res) {
    //const newPerson = await db.query(`INSERT INTO person (name)`)
    res.json(req.body);
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
