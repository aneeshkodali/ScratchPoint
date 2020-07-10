const mongoose = require("mongoose");

// schema
const opts = { toJSON: { virtuals: true } };

const pointSchema = new mongoose.Schema({
    point: Number,
    player1: String,
    player2: String,
    setScorePlayer1: Number,
    setScorePlayer2: Number,
    gameScorePlayer1: Number,
    gameScorePlayer2: Number,
    pointScorePlayer1: Number,
    pointScorePlayer2: Number, 
    server: String,
    rallyLength: Number,
    winner: String,
    result: String,
    shots: [{type: mongoose.Schema.Types.ObjectId, ref: 'Shot'}]
}, opts);



// VIRTUALS
pointSchema.virtual("side").get(function() {
    return (this.pointScorePlayer1 + this.pointScorePlayer2) % 2 === 0 ? "deuce" : "ad";
});

pointSchema.virtual("receiver").get(function() {
    return this.server === this.player1 ? this.player2 : this.player1;
});

//pointSchema.virtual("winner").get(function() {
//    if (["ace", "service winner", "winner"]) {
//        return this.rallyLength % 2 === 0 ? this.receiver : this.server;
//    } else {
//        return this.rallyLength % 2 === 0 ? this.server : this.receiver;
//    }
//});

pointSchema.virtual("loser").get(function() {
    return this.winner === this.player1 ? this.player2 : this.player1;
});

pointSchema.virtual("setScoreServer").get(function() {
    return this.server === this.player1 ? this.setScorePlayer1 : this.setScorePlayer2;
});

pointSchema.virtual("gameScoreServer").get(function() {
    return this.server === this.player1 ? this.gameScorePlayer1 : this.gameScorePlayer2;
});

pointSchema.virtual("pointScoreServer").get(function() {
    return this.server === this.player1 ? this.pointScorePlayer1 : this.pointScorePlayer2;
});

pointSchema.virtual("setScoreReceiver").get(function() {
    return this.server === this.player1 ? this.setScorePlayer2 : this.setScorePlayer1;
});

pointSchema.virtual("gameScoreReceiver").get(function() {
    return this.server === this.player1 ? this.gameScorePlayer2 : this.gameScorePlayer1;
});

pointSchema.virtual("pointScoreReceiver").get(function() {
    return this.server === this.player1 ? this.pointScorePlayer2 : this.pointScorePlayer1;
});

pointSchema.virtual("setInMatch").get(function() {
    return this.setScorePlayer1 + this.setScorePlayer2 + 1;
});

pointSchema.virtual("gameInSet").get(function() {
    return this.gameScorePlayer1 + this.gameScorePlayer2 + 1;
});

pointSchema.virtual("setScore").
get(function() {
    return `${this.setScoreServer}-${this.setScoreReceiver}`;
});

pointSchema.virtual("gameScore").
get(function() {
    return `${this.gameScoreServer}-${this.gameScoreReceiver}`;
});

pointSchema.virtual("pointScore").
get(function() {
    return `${this.pointScoreServer}-${this.pointScoreReceiver}`;
});


// model
const Point = mongoose.model("Point", pointSchema);

// export
module.exports = Point;