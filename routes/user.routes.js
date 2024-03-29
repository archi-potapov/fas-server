import { Router } from "express";
import { UserController } from "../controller/user.controller.js";
export const userRouter = new Router();

let userController = new UserController();

userRouter.post("", userController.createUser);
userRouter.get("/is-auth", userController.isAuthorized);
userRouter.get("/login", userController.getSessionKey);
