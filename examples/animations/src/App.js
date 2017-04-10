import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator } from 'react-hexgrid';
import './App.css';
import './Animations.css';

class App extends Component {
  // Some sick animations to hexagons
  render() {
    const hexagons = GridGenerator.rectangle(6, 6);
    return (
      <div className="App">
        <h1>SVG animations with react-hexgrid</h1>
        <HexGrid width={1200} height={800}>
          <Layout size={{ x: 7, y: 7 }} origin={{ x: -15, y: -40 }}>
            { hexagons.map((hex, i) => <Hexagon key={i} {...hex} />) }
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;
