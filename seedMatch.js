const mongoose = require("mongoose");
const Player = require("./models/player");
const Point = require("./models/point");

const data = [
    {
        point: 1,
        setScoreServer: 0,
        setScoreReceiver: 0,
        gameScoreServer: 0,
        gameScoreReceiver: 0,
        pointScoreServer: 0,
        pointScoreReceiver: 0,
        server: "Aneesh",
        receiver: "Anu",
        side: "deuce",
        rallyLength: 4,
        result: "unforced error",
        winner: "Aneesh",
        loser: "Anu"
    },
    {
        point: 2,
        setScoreServer: 0,
        setScoreReceiver: 0,
        gameScoreServer: 0,
        gameScoreReceiver: 0,
        pointScoreServer: 15,
        pointScoreReceiver: 0,
        server: "Aneesh",
        receiver: "Anu",
        side: "ad",
        rallyLength: 4,
        result: "unforced error",
        winner: "Aneesh",
        loser: "Anu"
    },
    {
        point: 3,
        setScoreServer: 0,
        setScoreReceiver: 0,
        gameScoreServer: 0,
        gameScoreReceiver: 0,
        pointScoreServer: 30,
        pointScoreReceiver: 0,
        server: "Aneesh",
        receiver: "Anu",
        side: "deuce",
        rallyLength: 4,
        result: "winner",
        winner: "Anu",
        loser: "Aneesh"
    },
    {
        point: 4,
        setScoreServer: 0,
        setScoreReceiver: 0,
        gameScoreServer: 0,
        gameScoreReceiver: 0,
        pointScoreServer: 30,
        pointScoreReceiver: 15,
        server: "Aneesh",
        receiver: "Anu",
        side: "deuce",
        rallyLength: 3,
        result: "winner",
        winner: "Aneesh",
        loser: "Anu"
    },
    {
        point: 5,
        setScoreServer: 0,
        setScoreReceiver: 0,
        gameScoreServer: 0,
        gameScoreReceiver: 0,
        pointScoreServer: 40,
        pointScoreReceiver: 15,
        server: "Aneesh",
        receiver: "Anu",
        side: "deuce",
        rallyLength: 4,
        result: "forced error",
        winner: "Aneesh",
        loser: "Anu"
    }
];

function seedDBMatch() {
    // delete points in match
    Point.deleteMany({}, err => {
        if (err) console.log(err);
    });

    // add points
    data.forEach(function(seed) {
        // create record in Point table
        Point.create(seed, function(err, point) {
            if (err) console.log(err);
        })
    })
}

module.exports = seedDBMatch;