import { Router } from "express";
import userController from "../controller/user.controller";
const router = new Router();

router.post(userController.createUser)
router.get(userController.getUsers)

module.exports = router