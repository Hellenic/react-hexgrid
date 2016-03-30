import React from 'react'
const { number, object, bool, string, array } = React.PropTypes
import ShapeGroup from './ShapeGroup'
import Path from './Path'
import Layout from './Layout'
import GridGenerator from './GridGenerator'

class HexGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hexagons: [],
      layout: null,
      path: {start: null, end: null}
    };
  }

  componentWillMount() {
    let s = this.props.layoutSize;
    let layout = new Layout(s.width, s.height, this.props.flat, this.props.origin);
    let generator = GridGenerator.getGenerator(this.props.map);
    let hexagons = generator.apply(this, this.props.mapProps)

    this.setState({
      hexagons: hexagons,
      layout: layout
    });
  }

  render() {
    return (
      <svg className="grid" width={this.props.width} height={this.props.height} viewBox="-50 -50 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        {
          this.state.hexagons.map((hex, index) => {
            return (
              <ShapeGroup key={index} hex={hex} layout={this.state.layout} actions={this.props.actions} />
            );
          })
        }
        <Path {...this.state.path} layout={this.state.layout} />
      </svg>
    );
  }

}

HexGrid.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  layoutSize: object.isRequired,
  flat: bool,
  origin: object,
  actions: object.isRequired,
  map: string,
  mapProps: array
};

HexGrid.defaultProps = {
  width: 800,
  height: 600,
  flat: true,
  map: 'hexagon',
  mapProps: [2]
}

export default HexGrid;
