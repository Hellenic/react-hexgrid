import React, { Component } from 'react';
import { HexGrid, HexUtils } from 'react-hexgrid';
import './Tiles.css';

class Tiles extends Component {
  constructor(props) {
    super(props);
    let boardConfig = {
      width: 1000,
      height: 800,
      layout: { width: 14, height: 14, flat: false, spacing: 1.05, name: 'tiles' },
      origin: { "x": -10, "y": -10 },
      map: "parallelogram",
      mapProps: [ -1, 1, -1, 2 ]
    }
    let grid = HexGrid.generate(boardConfig);
    grid.hexagons = grid.hexagons.map((hexagon, index) => {
      return Object.assign({}, hexagon, {
        props: {
          id: `Cat #${index}`,
          text: `Cat #${index}`,
          image: `http://lorempixel.com/400/400/cats/${index%10}/`
        }
      });
    })
    this.state = { grid, config: boardConfig };
  }

  onDragStart(targetHex, event) {
    event.dataTransfer.setData('hex', JSON.stringify(targetHex));
  }

  // Drop the whole tile from the array, after drag has ended
  // TODO We don't know if the drop was success or not
  onDragEnd(targetHex, event) {
    event.preventDefault();
    const { grid } = this.state;
    // grid.hexagons = grid.hexagons.filter(hex => !HexUtils.equals(targetHex, hex));
    grid.hexagons = grid.hexagons.map(hex => {
      if (HexUtils.equals(targetHex, hex)) {
        hex.props = {};
      }
      return hex;
    });
    this.setState({ grid });
  }

  render() {
    let { grid, config } = this.state;
    const actions = {
      onDragStart: (h, e) => { this.onDragStart(h, e); },
      onDragEnd: (h, e) => { this.onDragEnd(h, e); },
      onMouseEnter: () => {},
      onMouseLeave: () => {}
    };

    return (
      <div className="tiles">
        <h2>Hexagon bank</h2>
        <p>Drag tiles from here and drop them to the left.</p>
        <HexGrid width={config.width} height={config.height} actions={actions} hexagons={grid.hexagons} layout={grid.layout} />
      </div>
    );
  }
}

export default Tiles;
