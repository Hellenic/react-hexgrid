import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Text, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const config = configs['hexagon'];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.state = { hexagons, config };
  }

  changeType(event) {
    const name = event.currentTarget.value;
    const config = configs[name];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.setState({ hexagons, config });
  }

  render() {
    const { hexagons, config } = this.state;
    const layout = config.layout;
    const size = { x: layout.width, y: layout.height };
    return (
      <div className="App">
        <h2>Select grid type and configuration from dropdown.</h2>
        <div>
          <strong>Template: </strong>
          <select onChange={(ev) => this.changeType(ev)}>
            {Object.keys(configs).map((type) => (
              <option name={type}>{type}</option>
            ))}
          </select>
        </div>
        <hr />
        <HexGrid width={config.width} height={config.height}>
          <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
            {
              // note: key must be unique between re-renders.
              // using config.mapProps+i makes a new key when the goal template chnages.
              hexagons.map((hex, i) => (
                <Hexagon key={config.mapProps + i} q={hex.q} r={hex.r} s={hex.s}>
                  <Text>{HexUtils.getID(hex)}</Text>
                </Hexagon>
              ))
            }
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;
