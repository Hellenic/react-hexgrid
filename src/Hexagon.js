import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Hex from './models/Hex';
import HexUtils from './HexUtils';

class Hexagon extends Component {
  static propTypes = {
    q: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    points: PropTypes.string,
    layout: PropTypes.object,
    children: PropTypes.node
  };

  translate() {
    const { q, r, s, layout } = this.props;
    const hex = new Hex(q, r, s);
    const pixel = HexUtils.hexToPixel(hex, layout);
    return `translate(${pixel.x}, ${pixel.y})`;
  }

  render() {
    const { points } = this.props;
    return (
      <g className="shape-group" transform={this.translate()}>
        <polygon points={points} />
        {this.props.children}
      </g>
    );
  }
}

export default Hexagon;
