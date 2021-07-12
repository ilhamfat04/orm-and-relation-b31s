const express = require('express')

const router = express.Router()

// Controller
const { addUsers, getUsers, getUser } = require('../controllers/user')

// Route
router.post('/user', addUsers)
router.get('/users', getUsers)
router.get('/user/:id', getUser)

module.exports = router