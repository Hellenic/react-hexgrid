import React from 'react';
import classNames from 'classnames';
import HexPattern from './HexPattern';
import HexPointers from './HexPointers';
import HexUtils from './HexUtils';

const { object } = React.PropTypes;

class HexShape extends React.Component {

  getPoints(hex) {
    const points = this.props.layout.getPolygonPoints(hex)

    return points.map(point => `${point.x},${point.y}`).join(' ');
  }

  translate() {
    const { hex, layout } = this.props;
    const pixel = HexUtils.hexToPixel(hex, layout);
    return `translate(${pixel.x}, ${pixel.y})`;
  }

  getStyles(hex) {
    return (hex.props == {} || typeof(hex.props.image) === "undefined") ? {} : { fill: 'url(#'+ HexUtils.getID(hex) +')' };
  }

  render() {
    const { hex, actions } = this.props;
    const text = (hex.props.text) ? hex.props.text : HexUtils.getID(hex);
    const styles = this.getStyles(hex);
    const points = this.getPoints(hex);
    const { className } = hex.props;

    return (
      <g
        className={classNames('shape-group', className)}
        transform={this.translate()}
        draggable="true"
        onMouseEnter={e => actions.onMouseEnter(this.props.hex, e)}
        onMouseLeave={e => actions.onMouseLeave(this.props.hex, e)}
        onDragStart={e => actions.onDragStart(this.props.hex, e)}
        onDragEnd={e => actions.onDragEnd(this.props.hex, e)}
        onDragOver={e => actions.onDragOver(this.props.hex, e)}
        onDrop={e => actions.onDrop(this.props.hex, e)}
      >
        <HexPattern hex={hex} />
        <polygon points={points} style={styles} />
        <HexPointers hex={hex} points={points} />
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
