import React from 'react';
const { object, func } = React.PropTypes
import HexUtils from './HexUtils';

class ShapeGroup extends React.Component {

  getPoints(hex) {
    let points = this.props.layout.getPolygonPoints(hex)

    return points.map(point => {
      return point.x + ',' + point.y;
    }).join(' ');
  }

  translate() {
    let hex = this.props.hex;
    let pixel = HexUtils.hexToPixel(hex, this.props.layout);
    return `translate(${pixel.x}, ${pixel.y})`;
  }

  render() {
    let hex = this.props.hex;
    let text = Object.keys(hex).map(key => { return hex[key] }).join(',');

    return (
      <g className="shape-group" transform={this.translate()}
        onMouseEnter={e => this.props.onMouseEnter(this.props.hex, e)}
        onMouseLeave={e => this.props.onMouseLeave(this.props.hex, e)}
        >
        <polygon points={this.getPoints(hex)} />
        <text x="0" y="0.3em" textAnchor="middle">{text}</text>
      </g>
    );
  }
}
ShapeGroup.propTypes = {
  hex: object.isRequired,
  layout: object.isRequired,
  onMouseEnter: func
};

export default ShapeGroup;
