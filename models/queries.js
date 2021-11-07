const knex = require('../db-config/config')

// Check is todolist table is exist or not. If not, create columns of todolist table
knex.schema.hasTable('todolist').then(function (exists) {
    if (!exists) {
        return knex.schema.createTable('todolist', function (t) {
            t.increments('id').primary();
            t.string('t_name', 150);
        })
    }
})

// If todolist table is exist, run these functions
function getList() {
    return knex('todolist').select()
}

function addToDoList(isText) {
    return knex('todolist').insert(isText)
}

function editToDoItem(isID, isData) {
    return knex('todolist').where('id', isID).update(isData)
}
function deleteTodoItem(isID) {
    return knex('todolist').where('id', isID).del()
}
module.exports = {
    getList,
    addToDoList,
    deleteTodoItem,
    editToDoItem
}