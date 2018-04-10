const parkmeDB = require('../models/parkme-DB');


module.exports = {
  createUser(req, res){
    console.log('inside controller', req.body);
    parkmeDB.create(req.body)
    .then(results => {
        console.log('inserted successfully')
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
}
