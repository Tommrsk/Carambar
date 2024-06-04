const express = require('express');
const router = express.Router();
const blaguesController = require('../controllers/blagues');

router.get('/blagues/random', blaguesController.getRandomBlague);

module.exports = router;