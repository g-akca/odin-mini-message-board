import db from "../db.js";

async function getMessages(req, res) {
  const messages = await db.getMessages();

  if (!messages) {
    res.status(404).send("Messages not found");
    return;
  }

  res.render("index", { messages });
};

async function addNewMessage(req, res) {
  if (!req.body.message || !req.body.name) {
    res.status(400).send("Please enter your name and message");
    return;
  }

  await db.addNewMessage({ text: req.body.message, user: req.body.name, added: new Date() });

  res.redirect("/");
}

export { getMessages, addNewMessage };