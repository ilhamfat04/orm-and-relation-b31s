const express = require('express')

const router = express.Router()

// Controller
const { addUsers, getUsers, getUser, updateUser, deleteUser } = require('../controllers/user')

// Route
router.post('/user', addUsers)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

module.exports = router