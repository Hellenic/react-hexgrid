import React, { Component, PropTypes } from 'react';

// TODO Text is a separate component so that it could wrap the given text inside the surrounding hexagon
class Text extends Component {
  static propTypes = {
    children: PropTypes.string
  };

  render() {
    const { children } = this.props;
    return (
      <text x="0" y="0.3em" textAnchor="middle">{children}</text>
    );
  }
}

export default Text;
