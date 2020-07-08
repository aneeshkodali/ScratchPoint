// ################
// IMPORT
// ################
const express = require("express");
const bodyParser = require("body-parser");

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

app.get("/match", (req, res) => {
    res.render("match");
})

const port = 3000;
app.listen(port, () => {
    console.log("Server running...");
})