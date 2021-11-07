var express = require('express');
var router = express.Router();
var path = require('path');

var queries = require('../models/queries')

// Get whole list of ToDos
router.get('/todo', async (req, res) => {
    const list = await queries.getList()
    res.json(list)
})

// Save new ToDo
router.post('/todo', async (req, res) => {
    const addToDoText = await queries.addToDoList(req.body)
    const list = await queries.getList()
    res.json(list)
})

// Edit or Delete single ToDo
router.post('/todo-control', async (req, res) => {
    // Check is command 'delete' or 'update'.
    if (req.body.command == 'delete') {
        const deleteTodoItem = await queries.deleteTodoItem(req.body.id)
        const list = await queries.getList()
        // Resend list, to apply updated list to front page
        res.json(list)
    } else if (req.body.command == 'update') {
        const editToDoItem = await queries.editToDoItem(req.body.id, {t_name: req.body.t_name})
        const list = await queries.getList()
        // Resend list, to apply updated list to front page
        res.json(list)
    }
})
module.exports = router;