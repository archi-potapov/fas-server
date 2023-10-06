const db = require("../db");
class UserController {
    async createUser(req, res) {
        //const newPerson = await db.query(`INSERT INTO person (name)`)
    }
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows);
    }
    async getOneUser(req, res) {

    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}

module.exports = new UserController();