import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HexGrid extends Component {
  static propTypes = {
    width: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
    viewBox: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    width: 800,
    height: 600,
    viewBox: "-50 -50 100 100"
  }

  render() {
    const { width, height, viewBox } = this.props
    return (
      <svg className="grid" width={width} height={height} viewBox={viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg">
        {this.props.children}
      </svg>
    );
  }
}
export default HexGrid;
