const express = require("express");
const router = express.Router();
const Point = require("../models/point");

// INDEX - show match page
router.get("/", function(req, res) {
    res.render("match/index");
});

// see match data
router.get("/data", function(req, res) {

    Point.find({}).exec((err, points) => {
        if (err) console.log(err);
        else res.render("match/data", {points: points});
    })
    
})

module.exports = router;
