const mongoose = require("mongoose");
const Player = require("../models/player");
const Point = require("../models/point");

const player1 = "Aneesh";
const player2 = "Anu";


const data = [
    {
        point: 1,
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 0,
        gameScorePlayer2: 0,
        pointScorePlayer1: 0,
        pointScorePlayer2: 0,
        server: player1,
        rallyLength: 2,
        winner: player1,
        result: "unforced error"
    },
    {
        point: 2,
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 0,
        gameScorePlayer2: 0,
        pointScorePlayer1: 1,
        pointScorePlayer2: 0,
        server: player1,
        rallyLength: 2,
        winner: player1,
        result: "unforced error"
    },
    {
        point: 3,
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 0,
        gameScorePlayer2: 0,
        pointScorePlayer1: 2,
        pointScorePlayer2: 0,
        server: player1,
        rallyLength: 3,
        winner: player2,
        result: "winner"
    },
    {
        point: 4,
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 0,
        gameScorePlayer2: 0,
        pointScorePlayer1: 2,
        pointScorePlayer2: 1,
        server: player1,
        rallyLength: 1,
        winner: player1,
        result: "ace"
    },
    {
        point: 5,
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 0,
        gameScorePlayer2: 0,
        pointScorePlayer1: 3,
        pointScorePlayer2: 1,
        server: player1,
        rallyLength: 4,
        winner: player1,
        result: "forced error"
    },
    {
        point: 6,
        setScorePlayer1: 0,
        setScorePlayer2: 0,
        gameScorePlayer1: 1,
        gameScorePlayer2: 0,
        pointScorePlayer1: 0,
        pointScorePlayer2: 0,
        server: player2,
        rallyLength: 3,
        winner: player2,
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