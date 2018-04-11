const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);


module.exports = {
  create(user){
  return db.one('INSERT INTO users (username, password) VALUES ($/username/, $/password/) RETURNING *', user);
},
  check(user){
    console.log('inside models db for check');
    return db.one('SELECT * FROM users WHERE username=$[username] AND password=$[password]', user)
  },
  location(user){
    console.log('inside models for location', user);
    return db.one('UPDATE users SET latitude = $[latitude], longitude=$[longitude], accuracy=$[accuracy] WHERE id = $[user_id] RETURNING *', user)
  }
}
