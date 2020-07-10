const mongoose = require("mongoose");
const Player = require("../models/player");
const Point = require("../models/point");

const data = [
    {
        point: 1,
        player1: "Aneesh",
        player2: "Anu",
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 0,
        gameScorePlayer2: 0,
        pointScorePlayer1: 0,
        pointScorePlayer2: 0,
        server: "Aneesh",
        rallyLength: 4,
        winner: "Aneesh",
        result: "unforced error"
    },
    {
        point: 2,
        player1: "Aneesh",
        player2: "Anu",
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 0,
        gameScorePlayer2: 0,
        pointScorePlayer1: 1,
        pointScorePlayer2: 0,
        server: "Aneesh",
        rallyLength: 2,
        winner: "Aneesh",
        result: "unforced error"
    },
    {
        point: 3,
        player1: "Aneesh",
        player2: "Anu",
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 0,
        gameScorePlayer2: 0,
        pointScorePlayer1: 2,
        pointScorePlayer2: 0,
        server: "Aneesh",
        rallyLength: 3,
        winner: "Anu",
        result: "winner"
    },
    {
        point: 4,
        player1: "Aneesh",
        player2: "Anu",
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 0,
        gameScorePlayer2: 0,
        pointScorePlayer1: 2,
        pointScorePlayer2: 1,
        server: "Aneesh",
        rallyLength: 1,
        winner: "Aneesh",
        result: "ace"
    },
    {
        point: 5,
        player1: "Aneesh",
        player2: "Anu",
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 0,
        gameScorePlayer2: 0,
        pointScorePlayer1: 3,
        pointScorePlayer2: 1,
        server: "Aneesh",
        rallyLength: 4,
        winner: "Aneesh",
        result: "forced error"
    },
    {
        point: 6,
        player1: "Aneesh",
        player2: "Anu",
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 1,
        gameScorePlayer2: 0,
        pointScorePlayer1: 0,
        pointScorePlayer2: 0,
        server: "Anu",
        rallyLength: 3,
        winner: "Anu",
        result: "winner"
    }
];

function seedDBPoint() {
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

module.exports = seedDBPoint;