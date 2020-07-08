// ################
// IMPORT
// ################
const express = require("express");

// ################
// APP CONFIG
// ################
const app = express();
// set view engine to run ejs files
app.set("view engine", "ejs");

// ################
// ROUTES
// ################

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/match", (req, res) => {
    res.render("match");
})

const port = 3000;
app.listen(port, () => {
    console.log("Server running...");
})