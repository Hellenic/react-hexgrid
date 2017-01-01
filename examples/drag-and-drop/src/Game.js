import React, { Component } from 'react';
import { HexGrid, HexUtils } from 'react-hexgrid';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    let boardConfig = {
      width: 800, height: 800,
      layout: { width: 10, height: 10, flat: true, spacing: 1.1, name: 'game' },
      origin: { x: 0, y: 0 },
      map: 'hexagon',
      mapProps: [ 2 ]
    }
    let grid = HexGrid.generate(boardConfig);
    this.state = { grid, config: boardConfig };
  }

  onDrop(targetHex, event) {
    event.preventDefault();
    const { grid } = this.state;
    const hexas = grid.hexagons.map(hex => {
      if (HexUtils.equals(targetHex, hex)) {
        let originalHex = JSON.parse(event.dataTransfer.getData('hex'));
        hex.props = Object.assign({}, originalHex.props);
      }
      return hex;
    });
    grid.hexagons = hexas;
    this.setState({ grid });
  }

  onDragOver(targetHex, event) {
    event.preventDefault();
  }

  render() {
    let { grid, config } = this.state;
    const actions = {
      onDrop: (h, e) => { this.onDrop(h, e); },
      onDragOver: (h, e) => { this.onDragOver(h, e); },
      onMouseEnter: () => {},
      onMouseLeave: () => {}
    };

    return (
      <div className="game">
        <h2>Game board</h2>
        <p>Drag tiles from the right and drop them to this board. You can also drag & drop them within this board, but not back to the right side.</p>
        <p>There's also some restrictions in place, e.g. you cannot drop on non-empty tiles.</p>
        <HexGrid width={config.width} height={config.height} actions={actions} hexagons={grid.hexagons} layout={grid.layout} />
      </div>
    );
  }
}

export default Game;
