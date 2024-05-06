const express = require('express');
const { registerUser } = require('../controllers/userController');
const router = express.Router();



router.post("/signUp", registerUser);

module.exports = router;