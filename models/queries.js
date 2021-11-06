const knex = require('../db-config/config')

knex.schema.hasTable('todolist').then(function (exists) {
    if (!exists) {
        return knex.schema.createTable('todolist', function (t) {
            t.increments('id').primary();
            t.string('t_name', 100);
            t.timestamp(true, true);
        })
    }
})

function getList() {
    return knex('todolist').select()
}

module.exports = {
    getList
}