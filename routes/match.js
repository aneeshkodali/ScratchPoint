const express = require("express");
const router = express.Router();
const Point = require("../models/point");

// INDEX - show match page
router.get("/", function(req, res) {
    res.render("match/index");
})