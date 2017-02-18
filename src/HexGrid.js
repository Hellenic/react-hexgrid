import React, { Component, PropTypes } from 'react';

class HexGrid extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    viewBox: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    width: 800,
    height: 600,
    viewBox: "-50 -50 100 100"
  }

  render() {
    // TODO actions, path
    const { width, height, viewBox, hexagons, layout } = this.props
    return (
      <svg className="grid" width={width} height={height} viewBox={viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg">
        {this.props.children}
      </svg>
    );
  }
}
export default HexGrid;
