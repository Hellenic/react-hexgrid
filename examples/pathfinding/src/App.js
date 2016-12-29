import React, { Component } from 'react';
import { HexGrid, HexUtils } from 'react-hexgrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let boardConfig = {
      width: 1200, height: 1000,
      layout: { width: 6, height: 6, flat: true, spacing: 1.0 },
      origin: { x: 0, y: 0 },
      map: 'hexagon',
      mapProps: [ 4 ]
    }
    let grid = HexGrid.generate(boardConfig);
    this.state = {
      grid,
      config: boardConfig,
      path: { start: null, end: null }
    };
  }

  onClick(hex, event) {
    const { path } = this.state;
    if (path.start == null) {
      path.start = hex;
    }
    else {
      path.start = null;
      path.end = null;
    }
    this.setState({ path });
  }

  onMouseEnter(targetHex, event) {
    // Set the path's end on hover
    const { path, grid } = this.state;
    path.end = targetHex;

    // Color some hexagons
    const hexagons = grid.hexagons.map(hex => {
      // Highlight tiles that are next to the target  (1 distance away)
      hex.props.className = (HexUtils.distance(targetHex, hex) < 2) ? 'active' : '';

      // If the tile is on same coordinate, add class specific to the coordinate name
      hex.props.className += (targetHex.q === hex.q) ? ' q ' : '';
      hex.props.className += (targetHex.r === hex.r) ? ' r ' : '';
      hex.props.className += (targetHex.s === hex.s) ? ' s ' : '';

      return hex;
    });

    grid.hexagons = hexagons;
    this.setState({ path, grid });
  }

  render() {
    let { grid, config, path } = this.state;
    const actions = {
      onMouseEnter: (h, e) => this.onMouseEnter(h, e),
      onMouseLeave: () => {},
      onClick: (h, e) => this.onClick(h, e)
    };
    return (
      <div className="App">
        <h2>Pathfinding & active highlight</h2>
        <p>Click a tile to start drawing a path to your cursor. Click again to cancel.</p>
        <p>Hover around the board to see helper lines drawn.</p>
        <HexGrid width={config.width} height={config.height} hexagons={grid.hexagons} layout={grid.layout} actions={actions} path={path} />
      </div>
    );
  }
}

export default App;
