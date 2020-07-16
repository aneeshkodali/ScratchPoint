const express = require("express");
const router = express.Router();



// root route
router.get("/", (req, res) => {
    res.render("home");
});

// when data submitted for players
router.post("/", (req, res) => {
    
    // show 'match' page
    res.redirect("/match");
});


module.exports = router;