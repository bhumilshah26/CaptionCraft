const express = require('express')
const router = express.Router()
const getusers = require('../controllers/getuserscontroller.js')

router.get('/', getusers)

module.exports = router