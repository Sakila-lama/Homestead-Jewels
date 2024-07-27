const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Homestead Jewels',
    key: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

module.exports = router;
