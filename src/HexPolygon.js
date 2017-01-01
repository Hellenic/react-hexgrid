import React from 'react';
const { object, string } = React.PropTypes
import HexUtils from './HexUtils';

class HexPolygon extends React.Component {
  render() {
    const { id, points } = this.props;

    return (
      <polygon points={points} fill={`url(#${id})`}/>
    );
  }
}

HexPolygon.propTypes = {
  hex: object.isRequired,
  id: string.isRequired,
  points: string.isRequired
};

export default HexPolygon;
