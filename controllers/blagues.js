const blagues = require('../models/data.json');

exports.getRandomBlague = (req, res) => {
  const randomIndex = Math.floor(Math.random() * blagues.length);
  const randomBlague = blagues[randomIndex];
  res.json(randomBlague);
};