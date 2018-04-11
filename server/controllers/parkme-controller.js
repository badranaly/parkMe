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
  }
}
