const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);


module.exports = {
  create(user){
  return db.one('INSERT INTO users (username, password, longitude, latitude, accuracy) VALUES ($/username/, $/password/, $/longitude/, $/latitude/, $/accuracy/) RETURNING *', user);
},
  check(user){
    console.log('inside models db for check');
    return db.one('SELECT * FROM users WHERE username=$[username] AND password=$[password]', user);
  },
  updateLocation(user){
    console.log('inside models for update location', user);
    return db.one(`UPDATE users SET
                    longitude = $[longitude],
                    latitude = $[latitude],
                    accuracy = $[accuracy]
                    WHERE username = $[username]
                    RETURNING *;`, user);
  },
  lookingForLeaving(){
    console.log('inside update status model');
    return db.one(`SELECT * FROM users WHERE leaving=true`);
  },
  setStatus(user){
    return db.one(`UPDATE users SET
                   looking=$[looking]
                   WHERE id=$[id]
                   RETURNING *`, user)
  }
}
