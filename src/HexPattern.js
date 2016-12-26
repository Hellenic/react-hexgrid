import React from 'react';
const { object, string } = React.PropTypes
import HexUtils from './HexUtils';

class HexPattern extends React.Component {

  render() {
    const { hex, id, layout } = this.props;
    if (hex.props == {} || typeof(hex.props.image) === "undefined") {
      return null;
    }
    const { x, y } = layout.size;

    return (
      <defs>
        <pattern id={id} patternUnits="objectBoundingBox" x={0} y={0} width={x} height={y}>
          <image xlinkHref={hex.props.image} x={0} y={0} width={x*2} height={y*2} />
        </pattern>
      </defs>
    );
  }
}

HexPattern.propTypes = {
  hex: object.isRequired,
  id: string.isRequired,
  layout: object
};

export default HexPattern;
