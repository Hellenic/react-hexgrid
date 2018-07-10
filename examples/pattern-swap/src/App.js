import React, { Component } from "react";
import {
  GridGenerator,
  HexGrid,
  Layout,
  Text,
  Pattern,
  Hexagon,
  HexUtils
} from "react-hexgrid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const hexagons = GridGenerator.hexagon(2);

    // Set additional data for hexagons
    hexagons.forEach(hex => {
      hex.pattern = "pattern1";
    });

    this.state = {
      hexagons
    };
  }

  onClick(event, source) {
    // Get our hexagon data
    const { hexagons } = this.state;

    // Go through all of our hexagons and update patterns
    const hexas = hexagons.map(hex => {
      // Switch pattern only for the hexagon that was clicked
      if (HexUtils.equals(source.state.hex, hex)) {
        // Assign new pattern to _our_ data
        hex.pattern =
          source.props.fill === "pattern1" ? "pattern2" : "pattern1";
      }

      return hex;
    });

    // Save our new hexagon data to the state, which will cause a re-render
    this.setState({ hexagons: hexas });
  }

  render() {
    let { hexagons } = this.state;
    return (
      <div className="App">
        <h2>Hexagon Pattern Swap</h2>
        <p>Click a tile to swap it's pattern</p>
        <HexGrid width={1200} height={800}>
          <Layout
            size={{ x: 10, y: 10 }}
            flat={false}
            spacing={1.1}
            origin={{ x: 0, y: 0 }}
          >
            {hexagons.map((hex, i) => (
              <Hexagon
                key={i}
                q={hex.q}
                r={hex.r}
                s={hex.s}
                /* Here we pass the pattern which we want to display */
                fill={hex.pattern}
                /* onClick event gets back 2 properties: event and source (hexagon) */
                onClick={(e, h) => this.onClick(e, h)}
              >
                <Text>{HexUtils.getID(hex)}</Text>
              </Hexagon>
            ))}
            <Pattern id="pattern1" link="https://picsum.photos/200?image=80" />
            <Pattern id="pattern2" link="https://picsum.photos/200?image=82" />
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;
