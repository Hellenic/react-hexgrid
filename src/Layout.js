import React, { Component, PropTypes } from 'react';
import Orientation from './models/Orientation';
import Point from './models/Point';

class Layout extends Component {
  static LAYOUT_FLAT = new Orientation(3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0),2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0, 0.0);
  static LAYOUT_POINTY = new Orientation(Math.sqrt(3.0), Math.sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0, Math.sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0, 0.5);

  static propTypes = {
    size: PropTypes.object,
    flat: PropTypes.bool,
    spacing: PropTypes.number,
    origin: PropTypes.object,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    size: new Point(10, 10),
    flat: true,
    spacing: 1.0,
    origin: new Point(0, 0)
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
    const { children, flat, className, ...rest } = this.props;
    const orientation = (flat) ? Layout.LAYOUT_FLAT : Layout.LAYOUT_POINTY;
    const cornerCoords = this.calculateCoordinates(orientation);
    const points = cornerCoords.map(point => `${point.x},${point.y}`).join(' ');
    const childLayout = Object.assign({}, rest, { orientation });
    const childProps = {
      layout: childLayout,
      points
    };

    const childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, childProps);
    });
    return (
      <g className={className}>
        {childrenWithProps}
      </g>
    );
  }
}

export default Layout;
