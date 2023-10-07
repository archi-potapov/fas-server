import { Router } from "express";
import userController from "../controller/user.controller";
const router = new Router();

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)

module.exports = router