const mongoose = require('mongoose')
let URI = process.env.URI

mongoose.connect(URI)
.then(()=>{
console.log("Connected");
}) .catch((err)=>{
    console.log(err);
})