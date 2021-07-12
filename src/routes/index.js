const express = require('express')

const router = express.Router()

// Controller
const { addUsers } = require('../controllers/user')

// Route
router.post('/user', addUsers)


module.exports = router