import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Testing index route...");
});

router.get("/new", (req, res) => {
  res.send("Testing new message route...");
});

export default router;