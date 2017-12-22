const { Users } = require('../../SQL/models');

const UserController = {

  SignUp: function(req, res){
    Users.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(function(){
        console.log('User Signed Up Successfully');
        res.sendStatus(201);
      })
      .catch(function(){
        console.log('Error Signing Up User');
        res.sendStatus(500);
      })
  }
}

module.exports = UserController;