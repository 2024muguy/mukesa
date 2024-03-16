// pageRoutes.js
const express = require('express');
const router = express.Router();

// Route handler for /about
router.get('/about', (req, res) => {
  res.render('about');
});

// Route handler for /admin
router.get('/admin', (req, res) => {
  res.render('admin');
});

// Route handler for /constitution
router.get('/constitution', (req, res) => {
  res.render('constitution');
});

// Route handler for /vision
router.get('/vision', (req, res) => {
  res.render('vision');
});

module.exports = router;
