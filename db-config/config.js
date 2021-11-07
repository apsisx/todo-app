const knex = require('knex')

const connectKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: 'todo-app.sqlite3'
    },
    useNullAsDefault: true
})

module.exports = connectKnex