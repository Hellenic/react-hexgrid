import React, { Component, PropTypes } from 'react';

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
