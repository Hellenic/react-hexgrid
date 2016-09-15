# react-hexgrid

![Build Status](https://img.shields.io/travis/Hellenic/react-hexgrid.svg)
![Coverage](https://img.shields.io/coveralls/Hellenic/react-hexgrid.svg)
![Downloads](https://img.shields.io/npm/dm/react-hexgrid.svg)
![Downloads](https://img.shields.io/npm/dt/react-hexgrid.svg)
![npm version](https://img.shields.io/npm/v/react-hexgrid.svg)
![dependencies](https://img.shields.io/david/Hellenic/react-hexgrid.svg)
![dev dependencies](https://img.shields.io/david/dev/Hellenic/react-hexgrid.svg)
![License](https://img.shields.io/npm/l/react-hexgrid.svg)

Interactive hexagon grids with React bindings

With inspiration from
[http://www.redblobgames.com/grids/hexagons](http://www.redblobgames.com/grids/hexagons).

## Getting Started

Install it via npm:

```shell
npm install react-hexgrid
```

And include in your project:

```javascript
import { HexGrid } from 'react-hexgrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let boardConfig = {
      width: 800, height: 800,
      layout: { width: 10, height: 10, flat: true, spacing: 1.1 },
      origin: { x: 0, y: 0 },
      map: 'hexagon',
      mapProps: [ 2 ]
    }
    let grid = HexGrid.generate(boardConfig);
    this.state = { grid, config: boardConfig };
  }
  render() {
    let { grid, config } = this.state;

    return (
      <div className="App">
        <HexGrid width={config.width} height={config.height} hexagons={grid.hexagons} layout={grid.layout} />
      </div>
    );
  }
}
```
Will look something like this (custom CSS applied):
![HexGrid image](https://raw.githubusercontent.com/Hellenic/react-hexgrid/master/HexGrid.png "HexGrid")

More examples can be found from examples folder.
Another project using this library (with actions): https://github.com/Hellenic/Cardeon/tree/master/game

## License

MIT
