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
//const Player = require("./models/player");
//const Point = require("./models/point");



// ################
// APP CONFIG
// ################
const app = express();
// set view engine to run ejs files
app.set("view engine", "ejs");
// use body-parser
app.use(bodyParser.urlencoded({extended: true}));
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