import React from 'react'
const { number, object, bool } = React.PropTypes
import GridShape from './GridShape'
import Layout from './Layout'
import GridGenerator from './GridGenerator'

class HexaGrid extends React.Component {

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
    let hexagons = GridGenerator.generateHexagon(2);

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

HexaGrid.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  layoutSize: object.isRequired,
  flat: bool,
  origin: object,
};

HexaGrid.defaultProps = {
  width: 800,
  height: 600,
  flat: true
}

export default HexaGrid;
