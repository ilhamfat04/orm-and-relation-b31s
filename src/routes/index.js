const express = require('express')

const router = express.Router()

// Controller
const { addUsers, getUsers, getUser, updateUser } = require('../controllers/user')

// Route
router.post('/user', addUsers)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.patch('/user/:id', updateUser)

module.exports = router