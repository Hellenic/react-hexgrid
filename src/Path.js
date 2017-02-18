import React, { Component, PropTypes } from 'react';
import HexUtils from './HexUtils';

class Path extends Component {
  static propTypes = {
    start: PropTypes.object,
    end: PropTypes.object,
    layout: PropTypes.object
  };

  // TODO Refactor
  getPoints() {
    const { start, end, layout } = this.props;
    if (!start || !end) {
      return '';
    }

    // Get all the intersecting hexes between start and end points
    let distance = HexUtils.distance(start, end);
    let intersects = [];
    let step = 1.0 / Math.max(distance, 1);
    for (let i=0; i<=distance; i++) {
      intersects.push(HexUtils.round(HexUtils.lerp(start, end, step * i)));
    }

    // Construct Path points out of all the intersecting hexes (e.g. M 0,0 L 10,20, L 30,20)
    let points = 'M';
    points += intersects.map(hex => {
      let p = HexUtils.hexToPixel(hex, layout);
      return ` ${p.x},${p.y} `;
    }).join('L');

    return points;
  }

  render() {
    return (
      <path d={this.getPoints()}></path>
    );
  }
}

export default Path;
