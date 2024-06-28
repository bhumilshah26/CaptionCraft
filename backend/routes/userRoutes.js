const express = require('express')
const controller = require('../controllers/usercontroller')
const router = express.Router()


router.post('/', controller.login)
router.post('/signup', controller.signup)

module.exports = router