import React from 'react'
const { array, number, object } = React.PropTypes
import Hex from './Hex'
import ShapeGroup from './ShapeGroup'
import Path from './Path'

class GridShape extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      path: { start: new Hex(0, 0, 0), end: null}
    }
  }
  handleMouseEnter(hex, event) {
    this.setState({
      path: { start: this.state.path.start, end: hex }
    })
  }
  handleMouseLeave(event) {
    this.setState({
      path: { start: this.state.path.start, end: null }
    })
  }

  render() {
    return (
      <svg className="grid" width={this.props.width} height={this.props.height} viewBox="-50 -50 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        {
          this.props.hexagons.map((hex, index) => {
            return (
              <ShapeGroup key={index} hex={hex} layout={this.props.layout}
                onMouseEnter={(hex, e) => this.handleMouseEnter(hex, e)}
                onMouseLeave={(hex, e) => this.handleMouseLeave(hex, e)} />
            );
          })
        }
        <Path {...this.state.path} layout={this.props.layout} />
      </svg>
    );
  }

}

GridShape.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  hexagons: array.isRequired,
  layout: object.isRequired
};

GridShape.defaultProps = {
  width: 800,
  height: 600
}

export default GridShape;
