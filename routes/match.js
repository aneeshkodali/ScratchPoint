const express = require("express");
const router = express.Router();
const Point = require("../models/point");

const seedDBPoint = require("../seeds/seedPoint");
const seedDBShot = require("../seeds/seedShot");
const Shot = require("../models/shot");

const pointData = require("../seeds/seedPointRandom");
router.use(function(req, res, next) {
    res.locals.points = pointData;
    next();
})


// home - show match page
router.get("/", function(req, res) {

    seedDBPoint();
    seedDBShot();
    
    res.render("match/home");
});

// see match data
router.get("/data", function(req, res) {
    res.render("match/data", {points: res.locals.points})

    //Point.find({}).populate("shots").exec((err, points) => {
    //    if (err) console.log(err);
    //    else res.render("match/points", {points: points});
    //})  
});

// bar chart TEST
router.get("/summary", function(req, res) {
    res.render("match/summary", {points: res.locals.points});
})

module.exports = router;

