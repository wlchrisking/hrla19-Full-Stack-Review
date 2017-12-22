const db = require('../');
const Sequelize = require('sequelize');

const Pokemon = db.define('Pokemon', {
  name: Sequelize.STRING,
  image: Sequelize.STRING
})

module.exports = Pokemon;