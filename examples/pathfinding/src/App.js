import React, { Component } from 'react';
import { HexGrid, Hex } from 'react-hexgrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const boardConfig = {
      width: 1000, height: 800,
      layout: { width: 8, height: 8, flat: false, spacing: 1.1 },
      origin: { x: 0, y: 0 },
      map: 'hexagon',
      mapProps: [ 3 ]
    };
    let grid = HexGrid.generate(boardConfig);
    this.state = {
      grid,
      config: boardConfig,
      path: { start: new Hex(0, 0, 0), end: null }
    };
  }

  onMouseEnter(hex, event) {
    const path = this.state.path;
    path.end = hex;
    this.setState({ path });
  }

  render() {
    let { grid, config } = this.state;
    const actions = {
      onMouseEnter: (h, e) => this.onMouseEnter(h, e),
      onMouseLeave: () => {}
    };
    return (
      <div className="App">
        <h2>Pathfinding example</h2>
        <p>Move the mouse over the grid and see path drawn from center of the grid to the tile under your cursor.</p>
        <HexGrid actions={actions} path={this.state.path} width={config.width} height={config.height} hexagons={grid.hexagons} layout={grid.layout} />
      </div>
    );
  }
}

export default App;
