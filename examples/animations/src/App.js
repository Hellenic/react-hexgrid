import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator } from 'react-hexgrid';
import './App.css';
import './Animations.css';
import './Filters.css';

class App extends Component {
  // Some sick animations to hexagons
  render() {
    const hexagons = GridGenerator.rectangle(6, 6);
    return (
      <div className="App">
        <h1>SVG animations with react-hexgrid</h1>
        <small>Work in progress...</small>
        <HexGrid width={1200} height={900}>
          <Layout size={{ x: 6, y: 6 }} origin={{ x: -15, y: -40 }} spacing={1.15}>
            { hexagons.map((hex, i) => <Hexagon key={i} {...hex} />) }
          </Layout>
          <defs>
            <filter id="shadowed-goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
              <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
              <feOffset in="shadow" dx="1" dy="1" result="shadow" />
              <feComposite in2="shadow" in="goo" result="goo" />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </HexGrid>
      </div>
    );
  }
}

export default App;
