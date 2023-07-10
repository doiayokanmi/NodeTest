const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
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
  
  itemModel.find()
  .then((response) => {
    console.log(response)
    res.render("index", {userInput: response});
  }) 
  .catch((err) => {
    console.log(err);
  })
});

app.post("/details", (req, res) => {
  console.log(req.body);
  form = new itemModel(req.body);
  form.save()

  .then((response) => {
    console.log(response)
    res.redirect('/')

  }) 
  .catch((err) => {
    console.log(err);
  })

});

app.listen(port, () => {
  console.log("Server Started");
});
