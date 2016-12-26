import React from 'react';
const { object, string } = React.PropTypes
import HexUtils from './HexUtils';

class HexPolygon extends React.Component {
  getStyles(hex, id) {
    return (hex.props == {} || typeof(hex.props.image) === "undefined") ? {} : { fill: 'url(#'+ id +')' };
  }

  render() {
    const { hex, id, points } = this.props;
    const styles = this.getStyles(hex, id);

    return (
      <polygon points={points} style={styles} />
    );
  }
}

HexPolygon.propTypes = {
  hex: object.isRequired,
  id: string.isRequired,
  points: string.isRequired
};

export default HexPolygon;
