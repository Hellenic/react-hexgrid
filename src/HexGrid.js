import React from 'react'
const { number, object, bool, string } = React.PropTypes
import Hex from './Hex'
import GridShape from './GridShape'
import Layout from './Layout'
import GridGenerator from './GridGenerator'

class HexGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hexagons: [],
      layout: null
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
      <GridShape width={this.props.width} height={this.props.height} hexagons={this.state.hexagons} layout={this.state.layout} />
    );
  }

}

HexGrid.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  layoutSize: object.isRequired,
  flat: bool,
  origin: object,
  map: string
};

HexGrid.defaultProps = {
  width: 800,
  height: 600,
  flat: true,
  map: 'hexagon',
  mapProps: [2]
}

export default HexGrid;
