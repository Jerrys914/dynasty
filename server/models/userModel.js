const knex = require('../db/config.js')

const storeUser = (username, password, email) => {
  return knex('Users').insert({ 
    username: username, 
    password: password,
    email: email
  });
};

const getUserByUsername = username => {
  return knex('Users').where({
    username: username
  }).then(user=> {
    return user[0];
  });
};

const getUserById = id => {
  return knex('Users').where({
    id: id
  }).then(user=> {
    return user[0];
  });
};

module.exports = {
  storeUser,
  getUserByUsername,
  getUserById
}