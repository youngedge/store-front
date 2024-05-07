const express = require('express');
const { registerUser } = require('./userControllers');
const router = express.Router();



router.post("/signUp", registerUser);

module.exports = router;
