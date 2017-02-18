import React, { Component } from 'react';
import { HexGrid } from 'react-hexgrid';
import GameLayout from './GameLayout';
import TilesLayout from './TilesLayout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Drag & drop</h2>
        <p>Drag tiles from the right-side grid and drop them to the left grid.</p>
        <p>You can also drag & drop them within the left board, but not back to the right side.</p>
        <p>There's also some restrictions in place, e.g. you cannot drop on non-empty tiles.</p>
        <HexGrid width={1600} height={1000} viewBox="-50 -50 100 100">
          <GameLayout />
          <TilesLayout />
        </HexGrid>
      </div>
    );
  }
}

export default App;
