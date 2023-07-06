const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
const { default: mongoose, model } = require("mongoose");

dotenv.config();
app.set("view engine", "ejs");

require("./models/mongoose.connect");

let port = process.env.port;

const itemSchema = new mongoose.Schema({
  item: { type: String, required: true },
  amount: { type: Number, required: true },
});

const itemModel = mongoose.model("Items", itemSchema);

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/details", (req, res) => {
  console.log(req.body);
  form = new itemModel(req.body);
  form.save();
});

app.listen(port, () => {
  console.log("Server Started");
});
