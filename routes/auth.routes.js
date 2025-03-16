// routes/auth.routes.js
const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

// Task 6: Register new user
router.post('/register', authController.register);

// Task 7: Login as a registered user
router.post('/login', authController.login);

module.exports = router;