var express = require('express');
var router = express.Router();
var path = require('path');

var queries = require('../models/queries')

router.get('/getlist', async (req, res) => {
    const list = await queries.getList()
    res.json(list)
})
module.exports = router;