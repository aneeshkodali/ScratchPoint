const mongoose = require("mongoose");

const shotSchema = new mongoose.Schema({
    point: Number,
    shotNum: Number,
    shotNumWithServe: Number,
    shotBy: String,
    shotLocation: String,
    shotResult: String
});

const Shot = mongoose.model("Shot", shotSchema);

module.exports = Shot;