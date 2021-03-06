const parkmeDB = require('../models/parkme-DB');


module.exports = {
  createUser(req, res){
    // console.log('inside controller', req.body.userData);
    parkmeDB.create(req.body.userData)
    .then(results => {
      res.json({
        message: 'ok',
        data: results
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  },
  checkLogin(req, res){
    // console.log('inside login controller', req.body.userData);
    parkmeDB.check(req.body.userData)
    .then(results => {
      res.json({
        message: 'loggin in',
        data: results
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  },
  updateLocation(req, res){
    // console.log('inside location controller', req.body);
    parkmeDB.updateLocation(req.body)
    .then(results => {
      res.json({
          message: 'updated',
          data: results
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  },
  setLookingStatus(req, res, next){
    console.log('updated setstatus controller', req.body.userData);
    parkmeDB.setLookingStatus(req.body.userData)
    .then(results => {
      console.log('results of updated status', results);
      next()
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  },
  setLeavingStatus(req, res, next){
    console.log('inside set leaving', req.body.userData);
    parkmeDB.setLeavingStatus(req.body.userData)
    .then(results => {
      console.log('results of updated leaving status', results);
      // res.locals = myresults
      next()
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  },
  lookingForSpot(req, res){
    // console.log('inside update status', req.body.results);
    parkmeDB.lookingForSpot()
    .then(results => {
      console.log(results);
      // res.locals = results;
      res.json({
        message: "ok",
        data: results
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  },
  leavingSpot(req, res){
    console.log('inside leaving spot controller', req.body);
    parkmeDB.leavingSpot()
    .then(results => {
      res.json({
        message: 'found someone',
        data: results
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  },
  resetStatus(req, res){
    console.log('inside reset status for current', req.body.currentUser)
    console.log('inside reset status for user that was found', req.body.searchResults.data.data[0])
    parkmeDB.reset(req.body)
    .then(results => {
      console.log('results of reset booleans', results);
      res.json({
        message: 'we made it',
        data: results
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  }
}
