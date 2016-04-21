import React from 'react';
const { object } = React.PropTypes
import HexUtils from './HexUtils';

class HexShape extends React.Component {

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

  getID(hex) {
    return `${hex.q},${hex.r},${hex.s}`;
  }

  getStyles(hex) {
    return (hex.props == {} || typeof(hex.props.image) === "undefined") ? {} : { fill: 'url(#'+ this.getID(hex) +')' };
  }

  renderPattern(hex) {
    if (hex.props == {} || typeof(hex.props.image) === "undefined")
      return null;

    return (
      <defs>
        <pattern id={this.getID(hex)} patternUnits="userSpaceOnUse" x="-15" y="-10" width="30" height="20">
          <image xlinkHref={hex.props.image} x="0" y="0" width="30" height="20" />
        </pattern>
      </defs>
    );
  }

  render() {
    let hex = this.props.hex;
    let text = (hex.props.text) ? hex.props.text : this.getID(hex);
    let actions = this.props.actions;
    let styles = this.getStyles(hex);
    return (
      <g className="shape-group" transform={this.translate()} draggable="true"
        onMouseEnter={e => actions.onMouseEnter(this.props.hex, e)}
        onMouseLeave={e => actions.onMouseLeave(this.props.hex, e)}
        onDragStart={e => actions.onDragStart(this.props.hex, e)}
        onDragEnd={e => actions.onDragEnd(this.props.hex, e)}
        onDragOver={e => actions.onDragOver(this.props.hex, e)}
        onDrop={e => actions.onDrop(this.props.hex, e)}
        >
        {this.renderPattern(hex)}
        <polygon points={this.getPoints(hex)} style={styles} />
        <text x="0" y="0.3em" textAnchor="middle">{text}</text>
      </g>
    );
  }
}
HexShape.propTypes = {
  hex: object.isRequired,
  layout: object.isRequired,
  actions: object.isRequired
};

export default HexShape;
