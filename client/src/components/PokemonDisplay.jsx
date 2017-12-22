import React from 'react'

const PokemonDisplay = (props) => {
  return(
    <div>
      <h5>{props.pokemonName}</h5>
      <img src={props.pokemonImage}/>
      <button onClick={props.catchPokemon}> Catch </button>
    </div>
  )
}

export default PokemonDisplay;