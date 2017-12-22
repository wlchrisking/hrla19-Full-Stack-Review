const Sequelize = require('sequelize');
const db = new Sequelize(process.env.PG);

db.authenticate()
  .then(function(){
    console.log('DB has connected successfully!');
  })
  .catch(function(){
    console.log("Error connecting DB!!!");
  })


module.exports = db;