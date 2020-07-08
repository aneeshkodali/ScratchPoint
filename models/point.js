const mongoose = require("mongoose");

// schema
const pointSchema = new mongoose.Schema({
    point: Number,
    setScoreServer: Number,
    setScoreReceiver: Number,
    gameScoreServer: Number,
    gameScoreReceiver: Number,
    pointScoreServer: Number,
    pointScoreReceiver: Number,

    setInMatch: Number,
    gameInSet: Number,
    setScore: String,
    gameScore: String,
    pointScore: String,

    server: String,
    receiver: String,
    side: String,
    rallyLength: Number,
    result: String,
    winner: String,
    loser: String
});

// model
const Point = mongoose.model("Point", pointSchema);

// export
module.exports = Point;