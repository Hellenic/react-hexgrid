import React, { Component } from 'react';
import { HexGrid } from 'react-hexgrid';
import * as actions from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const boardConfig = {
      width: 800, height: 800,
      layout: { width: 10, height: 10, flat: false, spacing: 1.1 },
      origin: { x: -35, y: -35 },
      map: 'triangle',
      mapProps: [ 4 ]
    };
    let grid = HexGrid.generate(boardConfig);

    // Example how a tile can receive props
    grid.hexagons[3].props = {
      id: 'cat #1',
      text: 'Cat picture',
      image: 'http://lorempixel.com/200/200/cats/4/'
    }
    this.state = { grid, config: boardConfig };
  }
  render() {
    let { grid, config } = this.state;
    return (
      <div className="App">
        <h2>See console for different events.</h2>
        <HexGrid actions={actions} width={config.width} height={config.height} hexagons={grid.hexagons} layout={grid.layout} />
      </div>
    );
  }
}

export default App;
