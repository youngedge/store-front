const express = require('express');
const { registerUser, loginUser } = require('./userControllers');
const router = express.Router();

router.post("/signUp", registerUser);
router.post("/login", loginUser);

module.exports = router;
