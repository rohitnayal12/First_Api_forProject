const { authController } = require('../controllers/User.controller')
const express = require('express');

const app = express.Router();

// Register Route
app.post('/signup', authController.register);

// Login Route
app.post('/login', authController.login);

// Get All User Data
app.get('/getdata', authController.getusers);

module.exports = app;