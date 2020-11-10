import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Point from './models/Point';

class Pattern extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    size: PropTypes.object,
    patternUnits: PropTypes.string
  };
  static defaultProps = {
    size: new Point(10, 10),
    patternUnits: 'objectBoundingBox'
  };

  render() {
    const { id, link, size, patternUnits } = this.props;

    return (
      <defs>
        <pattern id={id} patternUnits={patternUnits} x={0} y={0} width={size.x} height={size.y}>
          <image xlinkHref={link} x={0} y={0} width={size.x*2} height={size.y*2} />
        </pattern>
      </defs>
    );
  }
}

export default Pattern;
