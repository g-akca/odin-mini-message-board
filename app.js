import express from "express";
import router from "./routes/router.js";

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
});