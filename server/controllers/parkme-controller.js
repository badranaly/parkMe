const parkmeDB = require('../models/parkme-DB');


module.exports = {
  createUser(req, res){
    console.log('inside controller', req.body);
    parkmeDB.create(req.body)
    .then(results => {
      res.json({
        message: 'ok',
        data: results
      })
    })
    .catch(err => {
      res.status(500).send(err)
    })
  },
  checkLogin(req, res){
    console.log('inside login controller', req.body);
    parkmeDB.check(req.body)
    .then(results => {
      res.json({
        message: 'loggin in',
        data: results
      })
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
}
