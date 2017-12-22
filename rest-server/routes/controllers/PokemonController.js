const axios = require('axios');
const { Pokemon } = require('../../SQL/models/index');

const PokemonController = {
  SearchPokemon: function(req, res){
    axios.get("http://pokeapi.co/api/v2/pokemon/" + req.params.pokemon_id)
      .then(function(response){
        const payload = {
          name: response.data.name,
          image: response.data.sprites.front_shiny
        }
        res.send(payload);
      })
      .catch(function(err){
        console.log(err);
        res.sendStatus(500);
      })
  },

  CatchPokemon: (req, res)=> {
    Pokemon.create({
      name: req.body.name,
      image: req.body.image,
      UserId: req.body.id
    })
      .then(()=> {
        res.sendStatus(201);
      })
      .catch(()=> {
        res.sendStatus(500);
      })
  },

  findAllByUser: (req, res) =>{
    Pokemon.findAll({
      where: {
        UserId: 2
      }
    })
      .then((data)=>{
        console.log(data);
      })
      .catch(()=>{
        console.log('something went wrong');
      })
  }
}

module.exports = PokemonController