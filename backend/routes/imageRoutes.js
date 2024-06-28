const express = require('express')
const router = express.Router()
const run = require('../controllers/imagecontroller.js')


router.get('/', run)

module.exports = router
