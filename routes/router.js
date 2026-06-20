import { Router } from "express";
import { getMessages } from "../controllers/messagesController.js";

const router = Router();

router.get("/", async (req, res) => {
  const messages = await getMessages(req, res);
  res.render("index", { messages });
});

router.get("/new", (req, res) => {
  res.send("Testing new message route...");
});

export default router;