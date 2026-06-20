import db from "../db.js";

async function getMessages(req, res) {
  const messages = await db.getMessages();

  if (!messages) {
    res.status(404).send("Messages not found");
    return;
  }

  res.render("index", { messages });;
};

export { getMessages };