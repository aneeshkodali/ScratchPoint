// initialize players
const player1 = "Iron Man";
const player2 = "Thor";
const players = [player1, player2];

// generate point winner - random draw from players array
function generatePlayer() {
    const randNum = Math.floor(Math.random()*players.length);
    return players[randNum];
}

function changeServer(currentServer) {
    return players.filter(player => player != currentServer)[0];
}

function generatePointWinner() {
    return Math.random() < .8 ? player1 : player2;
}

// generate rally length - randomly pick number
function generatePointRallyLength() {
    const min = 1;
    const max = 3;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// generate point result using server, winner, and rally length
function generatePointResult(point) {
    const errorList = ["forced error", "unforced error"];
    const pointWinner = point["winner"];
    const pointServer = point["server"];
    const pointRallyLength = point["rallyLength"];

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



function generateServeLocation() {
    const locationListServe = ["out wide", "into the body", "down the T"];
    const randNum = Math.floor(Math.random()*locationListServe.length);
    return locationListServe[randNum];
};

function generateShotLocation() {
    const locationList = ["crosscourt", "down the middle", "down the line", "inside out", "inside in"];
    const randNum = Math.floor(Math.random()*locationList.length);
    return locationList[randNum];
};

function generateServe() {
    return "serve";
};

function generateShot() {
    const shotList = ["forehand", "backhand"];
    const randNum = Math.floor(Math.random()*shotList.length);
    return shotList[randNum];
};


let matchData = [];

// initialize data for 1st point (all other data for this point and for other points will be calculated from these)    
let point = 1;
let setScorePlayer1 = 0;
let setScorePlayer2 = 0;
let gameScorePlayer1 = 0;
let gameScorePlayer2 = 0;
let pointScorePlayer1 = 0;
let pointScorePlayer2 = 0;
let server = generatePlayer();

let playMatch = true;
while (playMatch) {
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

    pointObj["winner"] = generatePointWinner(),
    pointObj["rallyLength"] =  generatePointRallyLength(),
    pointObj["result"] = generatePointResult(pointObj);

    let shotArr = [];
    

    for (let i = 1; i <= pointObj["rallyLength"]; i++) {
        let shotObj = {
            pointNum: point,
            shotNum: i,
            shotNumWithServe: i
        };
        shotObj["shotBy"] = shotObj["shotNum"] % 2 === 0 ? pointObj["receiver"] : pointObj["server"];
        shotObj["shotResult"] = shotObj["shotNum"] === pointObj["rallyLength"] ? pointObj["result"] : "none";

        
        let shotStroke = 
        shotObj["shotLocation"] = shotObj["shotNum"] === 1 ? generateServeLocation() : generateShotLocation();
        shotObj["shotStroke"] = shotObj["shotNum"] === 1 ? generateServe() : generateShot();

        shotArr.push(shotObj);
    };
    pointObj["shots"] = shotArr;
    
    matchData.push(pointObj);
    

    // update game scores, point scores, and server
    if (pointObj["winner"] === player1) {
        if (pointScorePlayer1 === 3) {
            gameScorePlayer1++;
            pointScorePlayer1 = 0;
            pointScorePlayer2 = 0;
            server = changeServer(pointObj["server"]);
        } else pointScorePlayer1++;
    } else {
        if (pointScorePlayer2 === 3) {
            gameScorePlayer2++;
            pointScorePlayer1 = 0;
            pointScorePlayer2 = 0;
            server = changeServer(pointObj["server"]);
        } else pointScorePlayer2++;
    }
    if (gameScorePlayer1===3 || gameScorePlayer2===3) {
        playMatch = false;
    }
    
    point++;
};





module.exports = matchData;

