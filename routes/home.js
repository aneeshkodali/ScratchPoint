const express = require("express");
const router = express.Router();
const Point = require("../models/point");
const Player = require("../models/player");

const seedDBPoint = require("../seeds/seedPoint");


// root route
router.get("/", (req, res) => {
    res.render("home");
});

// when data submitted for players
router.post("/", (req, res) => {
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

    // delete previous player records
    // revisit this to delete on app start or app end
    Point.deleteMany({}, err => {
        if (err) console.log(err);
    });
    

    // add match data
    seedDBPoint();
    
    // show 'match' page
    res.redirect("/match");
});


module.exports = router;