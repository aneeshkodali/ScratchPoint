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

router.get("/json", function(req, res) {
    res.json(res.locals.data);
})

// rally tree
router.get("/rallytree", function(req, res) {
    res.render("match/rallytree");
})

// points2set
router.get("/points2set", function(req, res) {
    res.render("match/points2set");
})

module.exports = router;

