import React from 'react';
const { object, string, bool } = React.PropTypes
import HexUtils from './HexUtils';

class HexPolygon extends React.Component {
  render() {
    const { id, points, useFill } = this.props;
    const fill = (useFill) ? `url(#${id})` : null;

    return (
      <polygon points={points} fill={fill} />
    );
  }
}

HexPolygon.propTypes = {
  hex: object.isRequired,
  id: string.isRequired,
  points: string.isRequired,
  useFill: bool
};

export default HexPolygon;
