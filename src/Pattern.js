import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Point from './models/Point';

class Pattern extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    size: PropTypes.object
  };
  static defaultProps = {
    size: new Point(10, 10)
  };

  render() {
    const { id, link, size } = this.props;

    return (
      <defs>
        <pattern id={id} patternUnits="objectBoundingBox" x={0} y={0} width="100%" height="100%">
          <image xlinkHref={link} x={0} y={0} width={size.x} height={size.y} />
        </pattern>
      </defs>
    );
  }
}

export default Pattern;
