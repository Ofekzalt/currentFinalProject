// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const { registerValidation, loginValidation } = require('../validation/authValidation');

router.post('/register', registerValidation, registerUser);
router.post('/login', loginValidation, loginUser);
router.post('/logout', logoutUser);

module.exports = router;