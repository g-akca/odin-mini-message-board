import { Router } from "express";
import { getMessages } from "../controllers/messagesController.js";

const router = Router();

router.get("/", getMessages);

router.get("/new", (req, res) => {
  res.send("Testing new message route...");
});

export default router;