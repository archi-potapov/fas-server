import { Router } from "express";
import userController from "../controller/user.controller";
const router = new Router();

router.post((req, res) => {
  res.send(req.body);
});
router.get("", (req, res) => {
  res.send(req.body);
});

module.exports = router;
