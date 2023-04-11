const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./FormRouts')





app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://marinawittich1:1Lz8FPWt6W2u4n32@cluster0.uimxmlt.mongodb.net/?retryWrites=true&w=majority");

app.use(router)

app.listen(4000, () => {
    console.log("Server is listening on Port 4000")
})