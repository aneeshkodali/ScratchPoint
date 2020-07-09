const mongoose = require("mongoose");

// schema
const opts = { toJSON: { virtuals: true } };

const pointSchema = new mongoose.Schema({
    point: Number,
    setScoreServer: Number,
    setScoreReceiver: Number,
    gameScoreServer: Number,
    gameScoreReceiver: Number,
    pointScoreServer: String,
    pointScoreReceiver: String,
    server: String,
    receiver: String,
    side: String,
    rallyLength: Number,
    result: String,
    winner: String,
    loser: String,
    shots: [{type: mongoose.Schema.Types.ObjectId, ref: 'Shot'}]
}, opts);



// VIRTUALS
pointSchema.virtual("setInMatch").get(function() {
    return this.setScoreServer + this.setScoreServer + 1;
});

pointSchema.virtual("gameInSet").get(function() {
    return this.gameScoreServer + this.gameScoreServer + 1;
});

pointSchema.virtual("setScore").
get(function() {
    return `${this.setScoreServer}-${this.setScoreReceiver}`;
}).
set(function(score) {
    const setScoreServer = score.split("-")[0];
    const setScoreReceiver = score.split("-")[1];
    this.set({setScoreServer, setScoreReceiver});
});

pointSchema.virtual("gameScore").
get(function() {
    return `${this.gameScoreServer}-${this.gameScoreReceiver}`;
}).
set(function(score) {
    const gameScoreServer = score.split("-")[0];
    const gameScoreReceiver = score.split("-")[1];
    this.set({gameScoreServer, gameScoreReceiver});
});

pointSchema.virtual("pointScore").
get(function() {
    return `${this.pointScoreServer}-${this.pointScoreReceiver}`;
}).
set(function(score) {
    const pointScoreServer = score.split("-")[0];
    const pointScoreReceiver = score.split("-")[1];
    this.set({pointScoreServer, pointScoreReceiver});
});


// model
const Point = mongoose.model("Point", pointSchema);

// export
module.exports = Point;