import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Hex from '../models/Hex';
import HexUtils from '../HexUtils';

class Hexagon extends Component {
  static propTypes = {
    q: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    points: PropTypes.string,
    fill: PropTypes.string,
    className: PropTypes.string,
    layout: PropTypes.object,
    onMouseEnter: PropTypes.func,
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    const { q, r, s, layout } = props;
    const hex = new Hex(q, r, s);
    const pixel = HexUtils.hexToPixel(hex, layout);

    this.state = {
      hex,
      transform: `translate(${pixel.x}, ${pixel.y})`
    };
  }

  getActions() {
    const DEFAULT_ACTIONS = {
      onMouseEnter: () => {},
      onMouseLeave: () => {},
      onDragStart: () => {},
      onDragEnd: () => {},
      onDragOver: () => {},
      onDrop: () => {},
      onClick: () => {}
    };
    // TODO This object will have other props now as well
    return Object.assign({}, DEFAULT_ACTIONS, this.props);
  }

  // TODO ComponentWillReceiveProps to update state
  render() {
    const { points, fill, className } = this.props;
    const { hex, transform } = this.state;
    const actions = this.getActions();
    const fillId = (fill) ? `url(#${fill})` : null;
    // TODO Would be better not to bind the events at all, if the event prop is not defined
    return (
      <g
        className={classNames('shape-group', className)}
        transform={transform}
        onMouseEnter={e => actions.onMouseEnter(e, hex)}
        onMouseEnter={e => actions.onMouseEnter(e, hex)}
        onMouseLeave={e => actions.onMouseLeave(e, hex)}
        onDragStart={e => actions.onDragStart(e, hex)}
        onDragEnd={e => actions.onDragEnd(e, hex)}
        onDragOver={e => actions.onDragOver(e, hex)}
        onDrop={e => actions.onDrop(e, hex)}
        onClick={e => actions.onClick(e, hex)}
      >
        <polygon points={points} fill={fillId} />
        {this.props.children}
      </g>
    );
  }
}

export default Hexagon;
