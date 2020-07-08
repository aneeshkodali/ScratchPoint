// ################
// IMPORT
// ################
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// ################
// DB CONFIG
// ################
const mongodb_uri = process.env.MONGODB_URI || "mongodb://localhost:27017/netgen";
// connect to DB
mongoose.connect(mongodb_uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err) => {
if (!err) { console.log('Successfully Connected in MongoDB') }
else { console.log('Syntax Error: ' + err) }
});
// import models
const Player = require("./models/player");
const Point = require(".models/point");



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
    // delete previous player records
    // revisit this to delete on app start or app end
    Player.deleteMany({}, err => {
        if (err) console.log(err);
    });
    
    // add players to DB
    let reqBody = req.body;
    for (let key in reqBody) {
        Player.create(reqBody[key], (err, player) => {
            if (err) console.log(err);
        });
    }
    // show 'match' page
    res.redirect("/match");
})

app.get("/match", (req, res) => {


    res.render("match");
})

const port = 3000;
app.listen(port, () => {
    console.log("Server running...");
})