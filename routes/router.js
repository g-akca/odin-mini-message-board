import { Router } from "express";
import { getMessages } from "../controllers/messagesController.js";

const router = Router();

router.get("/", getMessages);

router.get("/new", (req, res) => {
  res.render("form");
});

export default router;