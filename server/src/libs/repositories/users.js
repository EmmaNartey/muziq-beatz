const db = require('../db/db')
const table = 'users'
module.exports = function(){

    return {

        create: function(user){

            return new Promise(function(resolve, reject){

                // Create user here
                db.create(table, user)
                    .then(user => {
                        resolve(user)
                    })
                    .catch(error => reject(error))

            });

        },

        find: function(email){

            return new Promise(function (resolve, reject){

                // Find a user here
                db.find(table, email)
                    .then(user => {
                        resolve(user)
                    })
                    .catch(error => reject(error))

            });

        }
    };

}();