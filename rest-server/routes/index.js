const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');
const PokemonController = require('./controllers/PokemonController');

router.route('/user/signup')
  .post(UserController.SignUp)
router.route('/pokemon/search/:pokemon_id')
  .get(PokemonController.SearchPokemon)
router.route('/pokemon/catch')
  .post(PokemonController.CatchPokemon)
  .get(PokemonController.findAllByUser)

module.exports = router;