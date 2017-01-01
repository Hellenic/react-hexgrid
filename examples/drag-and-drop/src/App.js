import React, { Component } from 'react';
import Game from './Game';
import Tiles from './Tiles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Game />
        <Tiles />
      </div>
    );
  }
}

export default App;
