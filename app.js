// ################
// IMPORT
// ################
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// ################
// DB CONFIG
// ################
const mongodb_uri = process.env.MONGODB_URI || "mongodb://localhost:27017/nextgen";
mongoose.connect(mongodb_uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err) => {
if (!err) { console.log('Successfully Connected in MongoDB') }
else { console.log('Syntax Error: ' + err) }
});



// ################
// APP CONFIG
// ################
const app = express();
// set view engine to run ejs files
app.set("view engine", "ejs");
// use body-parser
app.use(bodyParser.urlencoded({extended: true}));


// ################
// ROUTES
// ################

// root route
app.get("/", (req, res) => {
    res.render("home");
});

// when data submitted for players
app.post("/", (req, res) => {
    let reqBody = req.body;
    let playerArr = [];
    for (let key in reqBody) {
        playerArr.push(reqBody[key]);
    }
    res.render("match", {players: playerArr});
})

//app.get("/match", (req, res) => {
//    res.render("match");
//})

const port = 3000;
app.listen(port, () => {
    console.log("Server running...");
})