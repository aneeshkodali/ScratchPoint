const mongoose = require("mongoose");
const Shot = require("../models/shot");
const Point = require("../models/point");

// data
const data = [
    {
        point: 1,
        shotNum: 1,
        shotNumWithServe: 1,
        shotBy: "Aneesh",
        shot: "1st Serve",
        shotLocation: "Down the T",
        shotResult: "None"
    },
    {
        point: 1,
        shotNum: 2,
        shotNumWithServe: 2,
        shotBy: "Anu",
        shot: "Backhand",
        shotLocation: "Crosscourt",
        shotResult: "None"
    },
    {
        point: 1,
        shotNum: 3,
        shotNumWithServe: 3,
        shotBy: "Aneesh",
        shot: "Backhand",
        shotLocation: "Down the Line",
        shotResult: "None"
    },
    {
        point: 1,
        shotNum: 4,
        shotNumWithServe: 4,
        shotBy: "Anu",
        shot: "Forehand",
        shotLocation: "Crosscourt",
        shotResult: "Unforced Error"
    }
];

// function to add data
function seedDBShot() {
    // delete shots in match
    Shot.deleteMany({}, err => {
        if (err) console.log(err);
    });

    // add shots
    data.forEach(function(seed) {
        // create record in Shot table
        Shot.create(seed, function(err, shot) {
            if (err) console.log(err);
            // Also add to Point
            else {
                // find point
                Point.findOne({point: seed.point}, function(err, pointRecord) {
                    if (err) console.log(err);
                    else {
                        // append to Point shots array
                        pointRecord.shots.push(shot);
                        pointRecord.save();
                    }
                })
            }
        })
    })
}

module.exports = seedDBShot;