// initialize players
const player1 = "Aneesh";
const player2 = "Anu";
const players = [player1, player2];

// generate point winner - random draw from players array
function generatePlayer() {
    const randNum = Math.floor(Math.random()*players.length);
    return players[randNum];
}

// generate rally length - randomly pick number
function generatePointRallyLength() {
    return Math.ceil(Math.random()*(4-1) + 1);
};

// generate point result using server, winner, and rally length
function generatePointResult(pointServer, pointWinner, pointRallyLength) {
    const errorList = ["forced error", "unforced error"];

    if (pointWinner === pointServer) {
        if (pointRallyLength === 1) return "ace";
        else {
            if (pointRallyLength % 2 === 0 ) {
                const randNum = Math.floor(Math.random()*errorList.length);
                return errorList[randNum];
            } else return "winner";
        }
    } else {
            if (pointRallyLength === 1) return "double fault";
            else {
                if (pointRallyLength % 2 === 0 ) return "winner";
                else {
                    const randNum = Math.floor(Math.random()*errorList.length);
                    return errorList[randNum];
                }
        }
    }
};


let pointDataRandom = [];

// initialize data for 1st point (all other data for this point and for other points will be calculated from these)    
let point = 1;
let setScorePlayer1 = 0;
let setScorePlayer2 = 0;
let gameScorePlayer1 = 0;
let gameScorePlayer2 = 0;
let pointScorePlayer1 = 0;
let pointScorePlayer2 = 0;
let server = generatePlayer();

while (point <= 5) {
    let pointObj = {
        point: point,
        setScorePlayer1: setScorePlayer1,
        setScorePlayer2: setScorePlayer2,
        gameScorePlayer1: gameScorePlayer1,
        gameScorePlayer2: gameScorePlayer2,
        pointScorePlayer1: pointScorePlayer1,
        pointScorePlayer2: pointScorePlayer2,
        server: server,
    };
    pointObj["side"] = (pointObj["pointScorePlayer1"] + pointObj["pointScorePlayer2"]) % 2 === 0 ? "deuce" : "ad";
    pointObj["receiver"] = pointObj["server"] === player1 ? player2 : player1;
    
    pointObj["setScoreServer"] = pointObj["server"] === player1 ? pointObj["setScorePlayer1"] : pointObj["setScorePlayer2"];
    pointObj["setScoreReceiver"] = pointObj["server"] === player1 ? pointObj["setScorePlayer2"] : pointObj["setScorePlayer1"];
    
    pointObj["gameScoreServer"] = pointObj["server"] === player1 ? pointObj["gameScorePlayer1"] : pointObj["gameScorePlayer2"];
    pointObj["gameScoreReceiver"] = pointObj["server"] === player1 ? pointObj["gameScorePlayer2"] : pointObj["gameScorePlayer1"];

    pointObj["pointScoreServer"] = pointObj["server"] === player1 ? pointObj["pointScorePlayer1"] : pointObj["pointScorePlayer2"];
    pointObj["pointScoreReceiver"] = pointObj["server"] === player1 ? pointObj["pointScorePlayer2"] : pointObj["pointScorePlayer1"];

    pointObj["setScore"] = `${pointObj["setScoreServer"]}-${pointObj["setScoreReceiver"]}`;
    pointObj["gameScore"] = `${pointObj["gameScoreServer"]}-${pointObj["gameScoreReceiver"]}`;
    pointObj["pointScore"] = `${pointObj["pointScoreServer"]}-${pointObj["pointScoreReceiver"]}`;

    pointObj["setInMatch"] = pointObj["setScorePlayer1"] + pointObj["setScorePlayer2"] + 1;
    pointObj["gameInSet"] = pointObj["gameScorePlayer1"] + pointObj["gameScorePlayer2"] + 1;
    pointObj["pointInGame"] = pointObj["pointScorePlayer1"] + pointObj["pointScorePlayer2"] + 1;

    pointObj["winner"] = generatePlayer(),
    pointObj["rallyLength"] =  generatePointRallyLength(),
    pointObj["result"] = generatePointResult(pointObj["server"], pointObj["winner"], pointObj["rallyLength"]);
    
    pointDataRandom.push(pointObj);
    
    if (pointObj["winner"] === player1) pointScorePlayer1++;
    else pointScorePlayer2++;
    
    point++;
};
console.log(pointArr);


module.exports = pointDataRandom;

