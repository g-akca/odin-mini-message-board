import { Router } from "express";
import { getMessages, addNewMessage } from "../controllers/messagesController.js";

const router = Router();

router.get("/", getMessages);

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", addNewMessage);

export default router;