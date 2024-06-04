const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/carrambar', (req, res) => {
  const imagePath = path.join(__dirname, '../public/carrambar.jpg');
  res.sendFile(imagePath);
});

module.exports = router;