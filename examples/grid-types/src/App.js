import React, { Component } from 'react';
import { HexGrid } from 'react-hexgrid';
import configs from './configurations';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const initialConfig = configs['hexagon'];
    const grid = HexGrid.generate(initialConfig);
    this.state = { grid, config: initialConfig };
  }

  changeType(event) {
    const name = event.currentTarget.value;
    const config = configs[name];
    const grid = HexGrid.generate(config);
    this.setState({ grid, config });
  }

  render() {
    let { grid, config } = this.state;
    return (
      <div className="App">
        <h2>Select grid type and configuration from dropdown.</h2>
        <div>
        <select onChange={(ev) => this.changeType(ev)}>
          <option name="hexagon">hexagon</option>
          <option name="triangle">triangle</option>
          <option name="parallelogram">parallelogram</option>
          <option name="rectangle">rectangle</option>
          <option name="orientedRectangle">orientedRectangle</option>
        </select>
        </div>
        <hr />
        <HexGrid width={config.width} height={config.height} hexagons={grid.hexagons} layout={grid.layout} actions={{}} />
      </div>
    );
  }
}

export default App;
