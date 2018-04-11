const router = require('express').Router()
const parkmeController = require('../controllers/parkme-controller')

router.post('/users', parkmeController.createUser)
router.post('/userLogin', parkmeController.checkLogin)



module.exports = router
