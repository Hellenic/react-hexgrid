import React, { Component } from 'react';
import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils } from 'react-hexgrid';
import './GameLayout.css';

class GameLayout extends Component {
  constructor(props) {
    super(props);
    const hexagons = GridGenerator.hexagon(2);
    this.state = { hexagons };
  }

  onDrop(event, source, target) {
    console.log('onDrop!', event, source, target);
    // const { hexagons } = this.state;
    // const hexas = hexagons.map(hex => {
    //   if (HexUtils.equals(source.state.hex, hex)) {
    //     hex.props = Object.assign({}, target);
    //   }
    //   return hex;
    // });
    // this.setState({ hexagons: hexas });
  }

  onDragOver(event, source) {
    // Could do something on onDragOver as well, if you wish
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
              <Text>{hex.props.text}</Text>
              { !!hex.props.image && <Pattern id={HexUtils.getID(hex)} link={hex.props.image} /> }
            </Hexagon>
          ))
        }
      </Layout>
    );
  }
}

export default GameLayout;
