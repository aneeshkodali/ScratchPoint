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
let player1SetScore = 0;
let player2SetScore = 0;
let player1GameScore = 0;
let player2GameScore = 0;
let player1PointScore = 0;
let player2PointScore = 0;
let server = generatePlayer();

let playMatch = true;
while (playMatch) {
    let pointObj = {
        point: point,
        player1SetScore: player1SetScore,
        player2SetScore: player2SetScore,
        player1GameScore: player1GameScore,
        player2GameScore: player2GameScore,
        player1PointScore: player1PointScore,
        player2PointScore: player2PointScore,
        server: server,
    };
    pointObj["side"] = (pointObj["player1PointScore"] + pointObj["player2PointScore"]) % 2 === 0 ? "deuce" : "ad";
    pointObj["receiver"] = pointObj["server"] === player1 ? player2 : player1;
    
    pointObj["serverSetScore"] = pointObj["server"] === player1 ? pointObj["player1SetScore"] : pointObj["player2SetScore"];
    pointObj["receiverSetScore"] = pointObj["server"] === player1 ? pointObj["player2SetScore"] : pointObj["player1SetScore"];
    
    pointObj["serverGameScore"] = pointObj["server"] === player1 ? pointObj["player1GameScore"] : pointObj["player2GameScore"];
    pointObj["receiverGameScore"] = pointObj["server"] === player1 ? pointObj["player2GameScore"] : pointObj["player1GameScore"];

    pointObj["serverPointScore"] = pointObj["server"] === player1 ? pointObj["player1PointScore"] : pointObj["player2PointScore"];
    pointObj["receiverPointScore"] = pointObj["server"] === player1 ? pointObj["player2PointScore"] : pointObj["player1PointScore"];

    pointObj["setScore"] = `${pointObj["serverSetScore"]}-${pointObj["receiverSetScore"]}`;
    pointObj["gameScore"] = `${pointObj["serverGameScore"]}-${pointObj["receiverGameScore"]}`;
    pointObj["pointScore"] = `${pointObj["serverPointScore"]}-${pointObj["receiverPointScore"]}`;

    pointObj["setInMatch"] = pointObj["player1SetScore"] + pointObj["player2SetScore"] + 1;
    pointObj["gameInSet"] = pointObj["player1GameScore"] + pointObj["player2GameScore"] + 1;
    pointObj["pointInGame"] = pointObj["player1PointScore"] + pointObj["player2PointScore"] + 1;

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
        if (player1PointScore === 3) {
            player1GameScore++;
            player1PointScore = 0;
            player2PointScore = 0;
            server = changeServer(pointObj["server"]);
        } else player1PointScore++;
    } else {
        if (player2PointScore === 3) {
            player2GameScore++;
            player1PointScore = 0;
            player2PointScore = 0;
            server = changeServer(pointObj["server"]);
        } else player2PointScore++;
    }
    if (player1GameScore===3 || player2GameScore===3) {
        playMatch = false;
    }
    
    point++;
};





module.exports = matchData;

