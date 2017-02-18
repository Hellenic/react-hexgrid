import React, { Component } from 'react';
import { HexGrid, Hex, Hexagon, Path, Layout, Text } from 'react-hexgrid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>React Hexgrid v1</h2>
        <p>Constructing Hexgrid with component-based approach with custom SVG elements.</p>
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0}>
              <Text>0, 0, 0</Text>
            </Hexagon>
            <Hexagon q={0} r={-1} s={1} />
            <Hexagon q={0} r={1} s={-1} />
            <Hexagon q={1} r={-1} s={0}>
              <Text>1, -1, 0</Text>
            </Hexagon>
            <Hexagon q={1} r={0} s={-1} />
            <Hexagon q={-1} r={1} s={0} />
            <Hexagon q={-1} r={0} s={1} />
            <Hexagon q={-2} r={0} s={1} />
            <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;
