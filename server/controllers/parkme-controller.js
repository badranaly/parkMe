const parkmeDB = require('../models/parkme-DB');


module.exports = {
  createUser(req, res){
    console.log('inside controller', req.body.userData);
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
    console.log('inside login controller', req.body.userData);
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
    console.log('inside location controller', req.body);
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
  lookForLeaving(req, res){
    console.log('inside update status', req.body.results);
    parkmeDB.lookingForLeaving()
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
  setStatus(req, res, next){
    console.log('updated setstatus controller', req.body.userData.results.results);
    parkmeDB.setStatus(req.body.userData.results.results)
    .then(results => {
      console.log('results of updated status', results);
      next()
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  }
}
