const express = require('express');
const { getAllUsers,registerUser, loginUser, logout } = require('../controllers/userController');
const router = express.Router();


// Get all users
router.get('/', getAllUsers);

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Logout a user
router.get('/logout', logout);

module.exports = router;