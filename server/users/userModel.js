const knex = require('../db/config.js')
let storeUser = (username, password, email) => {
  console.log('STORING USER');
  return knex('Users').insert({ 
    username: username, 
    password: password,
    email: email
  });
};

module.exports = {
  storeUser: storeUser
}