const db = require("../db");
class UserController {
  async createUser(req, res) {
    //const newPerson = await db.query(`INSERT INTO person (name)`)
    res.send("Created!!!");
  }
  async getUsers(req, res) {
    // const users = await db.query(`SELECT * FROM person`)
    // res.json(users.rows);
    res.send("Success!!!");
  }
  async getOneUser(req, res) {}
  async updateUser(req, res) {}
  async deleteUser(req, res) {}
}

module.exports = new UserController();
