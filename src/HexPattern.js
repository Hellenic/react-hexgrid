import React from 'react';
const { object } = React.PropTypes
import HexUtils from './HexUtils';

class HexPattern extends React.Component {

  render() {
    let hex = this.props.hex;
    if (hex.props == {} || typeof(hex.props.image) === "undefined")
      return null;

    return (
      <defs>
        <pattern id={HexUtils.getID(hex)} patternUnits="userSpaceOnUse" x="-15" y="-10" width="30" height="20">
          <image xlinkHref={hex.props.image} x="0" y="0" width="30" height="20" />
        </pattern>
      </defs>
    );
  }
}

HexPattern.propTypes = {
  hex: object.isRequired
};

export default HexPattern;
