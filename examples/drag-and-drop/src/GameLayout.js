import React, { Component } from 'react';
import { GridGenerator, Layout, Hex, Hexagon, Text, Pattern, HexUtils } from 'react-hexgrid';
import './GameLayout.css';

// TODO Mark those that allow drop and those that not
class GameLayout extends Component {
  constructor(props) {
    super(props);
    const hexagons = GridGenerator.hexagon(2);
    this.state = { hexagons };
  }

  onDrop(event, source, targetProps) {
    const { hexagons } = this.state;
    const hexas = hexagons.map(hex => {
      if (HexUtils.equals(source.state.hex, hex)) {
        hex.props = Object.assign({}, targetProps.data);
      }
      return hex;
    });
    this.setState({ hexagons: hexas });
  }

  // Decide here if you want to allow drop to this node
  onDragOver(event, source) {
    // Don't allow dropping for (1, -2, 1)
    if (!HexUtils.equals(source.state.hex, new Hex(1, -2, 1))) {
      event.preventDefault(); // Call preventDefault if you want to allow drop
    }
  }

  render() {
    let { hexagons } = this.state;
    return (
      <Layout className="game" size={{ x: 10, y: 10 }} flat={true} spacing={1.08} origin={{ x: -30, y: 0 }}>
        {
          hexagons.map((hex, i) => (
            <Hexagon
              key={i}
              q={hex.q}
              r={hex.r}
              s={hex.s}
              fill={(hex.props.image) ? HexUtils.getID(hex) : null}
              onDrop={(e, h, t) => this.onDrop(e, h, t) }
              onDragOver={(e, h) => this.onDragOver(e, h) }
            >
              <Text>{hex.props.text || HexUtils.getID(hex)}</Text>
              { !!hex.props.image && <Pattern id={HexUtils.getID(hex)} link={hex.props.image} /> }
            </Hexagon>
          ))
        }
      </Layout>
    );
  }
}

export default GameLayout;
