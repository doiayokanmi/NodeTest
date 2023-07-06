const express = require('express')
const app = express()
const port = 3000
app.set('view engines', 'ejs')

app.get("/", (req, res) => {
    res.sendFile("index")
})


app.listen(port, ()=> {
    console.log("Server Started");
})