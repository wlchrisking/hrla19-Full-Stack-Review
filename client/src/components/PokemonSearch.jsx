import React, { Component } from 'react';
import axios from 'axios';
import PokemonDisplay from './PokemonDisplay';

class PokemonSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchID: '',
      pokemonName: '',
      pokemonImage: '',
      id: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.catchPokemon = this.catchPokemon.bind(this);
  }
  onSubmitHandler(){
    axios.get('/api/pokemon/search/' + this.state.searchID)
      .then((response)=> {
        this.setState({
          pokemonName: response.data.name,
          pokemonImage: response.data.image
        })
      })
      .catch(()=> {
        console.log('dude work')
      })
  }

  onChangeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  catchPokemon(){
    let payload = {
      name: this.state.pokemonName,
      image: this.state.pokemonImage,
      id: this.state.id
    }
    axios.post('/api/pokemon/catch', payload)
  }

  render() {
    return (
      <div>
        <div> What is Your User ID? </div>
        <input name="id" onChange={this.onChangeHandler}/>
        <div> Search For A Pokemon! </div>
        <input name="searchID" onChange={this.onChangeHandler}/>
        <button onClick={this.onSubmitHandler}> Search! </button>
        {
        this.state.pokemonImage.length ?
        <PokemonDisplay pokemonName={this.state.pokemonName} pokemonImage={this.state.pokemonImage} catchPokemon={this.catchPokemon}/>
         :
         null
        }
      </div>
    );
  }
}

export default PokemonSearch;