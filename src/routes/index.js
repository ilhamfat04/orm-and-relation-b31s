const express = require('express')

const router = express.Router()

// Controller
// import controller function here
const { addUsers } = require('../controllers/user')

// Route
router.post('/user', addUsers)
// add route here

module.exports = router