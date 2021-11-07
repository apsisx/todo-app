var express = require('express');
var router = express.Router();
var path = require('path');

// Render index file as a home page
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, "../views/index.html"))
});
module.exports = router;