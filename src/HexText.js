import React from 'react';
const { string } = React.PropTypes

class HexText extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <text x="0" y="0.3em" textAnchor="middle">{text}</text>
    );
  }
}

HexText.propTypes = {
  text: string
};

export default HexText;
