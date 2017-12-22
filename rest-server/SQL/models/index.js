const Users = require('./Users');
const Pokemon = require('./Pokemon');

Users.hasMany(Pokemon);
Pokemon.belongsTo(Users);


Users.sync()
  .then(function(){
    console.log("Users Table Connected Successfully");
    Pokemon.sync()
      .then(()=> {
        console.log("Pokemon Table Connected Successfully");
      })
      .catch(()=>{
        console.log("Error Connecting Pokemon Table");
      })
  })
  .catch(function(){
    console.log("Error Connecting Users Table");
  })

module.exports = { Users, Pokemon }