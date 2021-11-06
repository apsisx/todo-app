var express = require('express');
var router = express.Router();
var path = require('path');

var queries = require('../models/queries')

router.get('/todo', async (req, res) => {
    const list = await queries.getList()
    res.json(list)
})

router.post('/todo', async (req, res) => {
    const addToDoText = await queries.addToDoList(req.body)
    const list = await queries.getList()
    res.json(list)
})

router.post('/todo-control', async (req, res) => {
    if (req.body.command == 'delete') {
        const deleteTodoItem = await queries.deleteTodoItem(req.body.id)
        const list = await queries.getList()
        res.json(list)
    } else if (req.body.command == 'update') {
        const editToDoItem = await queries.editToDoItem(req.body.id, {t_name: req.body.t_name})
        const list = await queries.getList()
        res.json(list)
    }
})
module.exports = router;