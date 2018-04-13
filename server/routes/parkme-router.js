const router = require('express').Router()
const parkmeController = require('../controllers/parkme-controller')

router.post('/users', parkmeController.createUser)
router.post('/userLogin', parkmeController.checkLogin)
router.patch('/updateLocation', parkmeController.updateLocation)
router.patch('/searching', parkmeController.setStatus, parkmeController.lookingForSpot)


module.exports = router
