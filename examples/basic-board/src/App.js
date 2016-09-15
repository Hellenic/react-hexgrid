import React, { Component } from 'react';
import { HexGrid } from 'react-hexgrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let boardConfig = {
      width: 800, height: 800,
      layout: { width: 10, height: 10, flat: true, spacing: 1.1 },
      origin: { x: 0, y: 0 },
      map: 'hexagon',
      mapProps: [ 2 ]
    }
    let grid = HexGrid.generate(boardConfig);
    this.state = { grid, config: boardConfig };
  }
  render() {
    let { grid, config } = this.state;

    return (
      <div className="App">
        <HexGrid width={config.width} height={config.height} hexagons={grid.hexagons} layout={grid.layout} />
      </div>
    );
  }
}

export default App;
