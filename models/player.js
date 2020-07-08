const mongoose = require("mongoose");

// player schema
const playerSchema = new mongoose.Schema({
    name: String,
    plays: String,
    image: String
});

// player model
const Player = mongoose.model("Player", playerSchema);

// export
module.exports = Player;