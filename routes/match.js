const express = require("express");
const router = express.Router();

const matchData = require("../seeds/generateMatch");
router.use(function(req, res, next) {
    res.locals.data = matchData;
    next();
})

// home - show match page
router.get("/", function(req, res) {
    
    res.render("match/home");
});

// see match data
router.get("/data", function(req, res) {
    res.render("match/data");

});

// bar chart TEST
router.get("/summary", function(req, res) {
    res.render("match/summary");
})

module.exports = router;

