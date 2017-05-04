import React, { Component } from 'react';
import { GridGenerator, HexGrid, Layout, Path, Text, Hexagon, HexUtils } from 'react-hexgrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const hexagons = GridGenerator.hexagon(4);
    this.state = {
      hexagons,
      path: { start: null, end: null }
    };
  }

  onClick(event, source) {
    const { path } = this.state;
    if (path.start == null) {
      path.start = source.state.hex;
    }
    else {
      path.start = null;
      path.end = null;
    }
    this.setState({ path });
  }

  onMouseEnter(event, source) {
    // Set the path's end on hover
    const { path, hexagons } = this.state;
    const targetHex = source.state.hex;
    path.end = targetHex;

    // Color some hexagons
    const coloredHexas = hexagons.map(hex => {
      hex.props = hex.props || {};
      // Highlight tiles that are next to the target (1 distance away)
      hex.props.className = (HexUtils.distance(targetHex, hex) < 2) ? 'active' : '';

      // If the tile is on same coordinate, add class specific to the coordinate name
      hex.props.className += (targetHex.q === hex.q) ? ' q ' : '';
      hex.props.className += (targetHex.r === hex.r) ? ' r ' : '';
      hex.props.className += (targetHex.s === hex.s) ? ' s ' : '';

      return hex;
    });

    this.setState({ path, hexagons: coloredHexas });
  }

  render() {
    let { hexagons, path } = this.state;
    return (
      <div className="App">
        <h2>Pathfinding & active highlight</h2>
        <p>Click a tile to start drawing a path to your cursor. Click again to cancel.</p>
        <p>Hover around the board to see helper lines drawn.</p>
        <HexGrid width={1200} height={800}>
          <Layout size={{ x: 6, y: 6 }} flat={false} spacing={1.1} origin={{ x: 0, y: 0 }}>
            {
              hexagons.map((hex, i) => (
                <Hexagon
                  key={i}
                  q={hex.q}
                  r={hex.r}
                  s={hex.s}
                  className={hex.props ? hex.props.className : null}
                  onMouseEnter={(e, h) => this.onMouseEnter(e, h)}
                  onClick={(e, h) => this.onClick(e, h)}
                >
                  <Text>{HexUtils.getID(hex)}</Text>
                </Hexagon>
              ))
            }
            <Path start={path.start} end={path.end} />
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;
