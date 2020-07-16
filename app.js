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

// use public folder
app.use(express.static(__dirname + "/public"));



// ################
// ROUTES
// ################

const homeRoutes = require("./routes/home");
app.use("/", homeRoutes);
const matchRoutes = require("./routes/match");
app.use("/match", matchRoutes);


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Server running...");
})