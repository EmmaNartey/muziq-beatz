
const knex = require('knex')({

    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'bigdee',
        password: 'bigdee2010',
        database: 'muziq-beatz',
        debug: false
    }

})


// Define tables here
knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('email');
    table.string('password');
    table.timestamp('created_at');
    table.timestamp('updated_at')
})

// Add other tables


module.exports = function () {

    return {

        create: function(table, data){

            return knex.insert(data)
                .into(table)
        },

        find: function (table, email) {

            return knex.table(table)
                .where('email', email)
        }
    }
}()