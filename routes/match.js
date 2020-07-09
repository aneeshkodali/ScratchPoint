const express = require("express");
const router = express.Router();
const Point = require("../models/point");

const seedDBPoint = require("../seeds/seedPoint");
const seedDBShot = require("../seeds/seedShot");
const Shot = require("../models/shot");


// home - show match page
router.get("/", function(req, res) {

    seedDBPoint();
    seedDBShot();
    
    res.render("match/home");
});

// see match data
router.get("/points", function(req, res) {


    Point.find({}).populate("shots").exec((err, points) => {
        if (err) console.log(err);
        else res.render("match/points", {points: points});
    })
    
})

module.exports = router;

