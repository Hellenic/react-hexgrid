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
import HexGrid from 'react-hexgrid';
...
render() {
  let config = {
    width: 1400,
    height: 800,
    layoutSize: {width: 10, height: 10},
    flat: true,
    origin: {x: 0, y: 0}
  };

  return (<HexGrid {...config} />);
}
```

## License

MIT
