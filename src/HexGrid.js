import React from 'react';
import Hex from './Hex';
const { number, object, bool, string, array } = React.PropTypes;
import HexShape from './HexShape';
import Path from './Path';
import Layout from './Layout';
import GridGenerator from './GridGenerator';

class HexGrid extends React.Component {
  render() {
    const { width, height, viewBox, hexagons, layout, actions, path } = this.props
    return (
      <svg className="grid" width={width} height={height} viewBox={viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg">
        {
          hexagons.map((hex, index) => {
            return (
              <HexShape key={index} hex={hex} layout={layout} actions={actions} />
            );
          })
        }
        {!!path && <Path {...path} layout={layout} />}
      </svg>
    );
  }
}

HexGrid.generate = (config, content) => {
  let layout = new Layout(config.layout, config.origin);
  let generator = GridGenerator.getGenerator(config.map);
  let hexagons = generator.apply(this, config.mapProps);

  return { hexagons, layout };
}

HexGrid.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  actions: object.isRequired,
  layout: object.isRequired,
  hexagons: array.isRequired,
  viewBox: string,
  path: object
};

HexGrid.defaultProps = {
  width: 800,
  height: 600,
  path: { start: null, end: null },
  actions: {},
  draggable: false,
  droppable: false,
  viewBox: "-50 -50 100 100"
}

export default HexGrid;
