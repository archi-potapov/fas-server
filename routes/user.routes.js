import { Router } from "express";
import userController from "../controller/user.controller";
const router = new Router();

router.post((req, res) => {
  res.json("Success!!!");
});
router.get("", (req, res) => {
  res.json("Success!!!");
});

module.exports = router;
