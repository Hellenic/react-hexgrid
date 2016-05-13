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
...
class Board extends React.Component {
  constructor(props) {
    super(props);
    let grid = HexGrid.generate(config.board);
    this.props.actions.createBoard(grid);
  }

  render() {
    let { grid, actions } = this.props;
    let config = {
      width: 800, height: 800,
      layout: { width: 10, height: 10, flat: true, spacing: 1.1 },
      origin: { x: 0, y: 0 },
      map: 'hexagon',
      mapProps: [ 2 ]
    }
    return (
      <HexGrid actions={actions} width={config.width} height={config.height}
        hexagons={grid.hexagons} layout={grid.layout} />
    )
  }
}
```
Will look something like this (custom CSS applied):
![HexGrid image](https://raw.githubusercontent.com/Hellenic/react-hexgrid/master/HexGrid.png "HexGrid")

## License

MIT
