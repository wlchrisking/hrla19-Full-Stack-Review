import React, { Component } from 'react';
import Login from './Login';
import PokemonSearch from './PokemonSearch';

class App extends Component {

  render() {
    return (
      <div>
        Hello From React
        <Login/>
        <PokemonSearch/>
      </div>
    );

  }
}

export default App;