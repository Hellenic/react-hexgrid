import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Orientation from './models/Orientation';
import Point from './models/Point';

class Layout extends Component {
  static LAYOUT_FLAT = new Orientation(3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0),2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0, 0.0);
  static LAYOUT_POINTY = new Orientation(Math.sqrt(3.0), Math.sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0, Math.sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0, 0.5);

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flat: PropTypes.bool,
    origin: PropTypes.object,
    size: PropTypes.object,
    spacing: PropTypes.number
  };

  static defaultProps = {
    size: new Point(10, 10),
    flat: true,
    spacing: 1.0,
    origin: new Point(0, 0)
  }

  static childContextTypes = {
    layout: PropTypes.object, // TODO Shape
    points: PropTypes.string
  };

  getChildContext() {
    const { children, flat, className, ...rest } = this.props;
    const orientation = (flat) ? Layout.LAYOUT_FLAT : Layout.LAYOUT_POINTY;
    const cornerCoords = this.calculateCoordinates(orientation);
    const points = cornerCoords.map(point => `${point.x},${point.y}`).join(' ');
    const childLayout = Object.assign({}, rest, { orientation });

    return {
      layout: childLayout,
      points
    };
  }

  getPointOffset(corner, orientation, size) {
    let angle = 2.0 * Math.PI * (corner + orientation.startAngle) / 6;
    return new Point(size.x * Math.cos(angle), size.y * Math.sin(angle));
  }

  // TODO Refactor
  calculateCoordinates(orientation) {
    const corners = [];
    const center = new Point(0, 0);
    const { size } = this.props;

    Array.from(new Array(6), (x, i) => {
      const offset = this.getPointOffset(i, orientation, size);
      const point = new Point(center.x + offset.x, center.y + offset.y);
      corners.push(point);
    });

    return corners;
  }

  render() {
    const { children, className } = this.props;
    return (
      <g className={className}>
        {children}
      </g>
    );
  }
}

export default Layout;
