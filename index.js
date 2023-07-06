const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
app.set('view engine', 'ejs')


require("./models/mongoose.connect")

let port = process.env.port


app.get("/", (req, res) => {
    res.render("index")
})

app.post("/details", (req, res)=> {

})


app.listen(port, ()=> {
    console.log("Server Started");
})