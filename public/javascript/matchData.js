//const mongoose = require("mongoose");
//const Point = require("../models/point");
//const Shot = require("../models/shot");


const pointTableRows = document.querySelectorAll("#pointTable tbody tr");
pointTableRows.forEach(row => {
    row.addEventListener("click", e => {
        let rowID = e.target.parentNode.id;
        console.log(rowID);
    });
});