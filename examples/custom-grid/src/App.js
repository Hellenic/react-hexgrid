import React, { Component } from 'react';
import { HexGrid, Layout, Hex } from 'react-hexgrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexagons: [],
      layout: {}
    };
  }

  generateHexagons(mapWidth, mapHeight) {
    let hexas = [];
    for (let q = 0; q < mapWidth; q++) {
      let offset = Math.floor(q/2); // or q>>1
      for (let r = -offset; r < mapHeight - offset; r++) {
        // Generate some random stuff for hexagons
        const text = Math.random().toString(36).substring(7, 10);
        const image = `http://lorempixel.com/g/100/100/cats/${Math.round(Math.random()*q) % 10}`;
        // And Hexagon itself
        const newHexagon = new Hex(q, r, -q-r, { text, image });
        hexas.push(newHexagon);
      }
    }

    // Some random filter to make grid look un-even
    return hexas.filter(hexa => !!Math.round(Math.random()));
  }

  componentWillMount() {
    const hexagons = this.generateHexagons(8, 6);
    const layout = new Layout({ width: 8, height: 8, flat: true, spacing: 1.02 }, { x: -50, y: -40 });

    this.setState({ hexagons, layout });
  }

  render() {
    let { hexagons, layout } = this.state;
    return (
      <div className="App">
        <h2>Custom generated hexagons</h2>
        <p>Generating custom maps of hexagons instead of using premade ones with HexGrid.generate().</p>
        <p>Generation is random, refresh the page to see it change. Also some awesome CSS for hover effects.</p>
        <HexGrid width={1000} height={800} hexagons={hexagons} layout={layout} />
      </div>
    );
  }
}

export default App;
