const express = require('express');
const router = express.Router();
const db = require('../models');

// Index - GET /users
router.get('/', (req, res) => {
  console.log(`🧶 ------ GET /users`)
  res.send('Get all the users')
});

// New - GET /users/new
router.get('/new', (req, res) => {
  console.log(`⭐ ------ GET /users/new`)
  res.send('New User')
});

// Create - POST /users
router.post('/', (req, res) => {
  console.log(`🍦 ------ POST /users`)
  console.log(`🛠️ ------ POST /users: ${req.body}`)
  res.send('New user who dis')
});

// Show/Details - GET /users/:id
// Edit - GET /users/:id/edit
// Update - PUT /users/:id
// Destory - Delete /users/:id

module.exports = router;