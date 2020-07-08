const mongoose = require("mongoose");
const Player = require("./models/player");

let point = 1;
let setScoreServer = 0;
let setScoreReceiver = 0;
let gameScoreServer = 0;
let gameScoreReceiver = 0;
let pointScoreServer = 0;
let pointScoreReceiver = 0;




//// delete previous player records
//    // revisit this to delete on app start or app end
//    Point.deleteMany({}, err => {
//        if (err) console.log(err);
//    });
    

//    // create match data and add to DB
//    Point.create({
//        point: 1,
//    setScoreServer: 2,
//    setScoreReceiver: 1,
//    gameScoreServer: 1,
//    gameScoreReceiver: 2,
//    pointScoreServer: "15",
//    pointScoreReceiver: "30",

//    //setInMatch: Number,
//    //gameInSet: Number,
//    //setScore: String,
//    //gameScore: String,
//    //pointScore: String,

//    server: "Aneesh",
//    receiver: "Anu",
//    side: "deuce",
//    rallyLength: 5,
//    result: "forced error",
//    winner: "Anu",
//    loser: "Aneesh"
//    }, (err, match) => {
//        if (err) console.log(err);
//    })