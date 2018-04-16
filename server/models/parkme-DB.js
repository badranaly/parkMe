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

  lookingForSpot(){
    console.log('inside looking for spot model');
    return db.many(`SELECT pg_sleep(10); SELECT * FROM users WHERE leaving=true `);
  },

  leavingSpot(){
    console.log('inside leaving spot inside model');
    return db.many(`SELECT pg_sleep(10); SELECT * FROM users WHERE looking=true`)
  },

  setLookingStatus(user){
    console.log('inside setting looking status model', user);
    return db.any(`UPDATE users SET
                   looking=$1
                   WHERE id=$2
                   RETURNING *`, [user.userLooking, user.currentUser.id]);
  },

  setLeavingStatus(user){
    console.log('inside models set leaving', user);
    // console.log('inside models set for id', user);
    return db.one(`UPDATE users SET
                   leaving=$1
                   where id=$2
                   RETURNING *`,[user.userLeaving, user.currentUser.id])
  },
  reset(user){
    console.log('inside models for RESET leaving id', user.currentUser);
    console.log('inside models for RESET leaving id', user.searchResults.data.data[0]);

    return db.any(`UPDATE users SET
                   looking=false,
                   leaving=false
                   WHERE id IN ($1, $2) RETURNING *`,[user.currentUser.id, user.searchResults.data.data[0].id])
  }
  // resetUserLooking(user){
  //
  // }
}
