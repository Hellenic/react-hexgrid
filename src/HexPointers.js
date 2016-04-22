import React from 'react';
const { object, string } = React.PropTypes
import HexUtils from './HexUtils';

class HexPointers extends React.Component {

  createPointerPolygon(point1, point2) {
    let p1 = point1.split(',');
    let p2 = point2.split(',');

    // Calculate the third point between those two
    let x = (parseFloat(p1[0]) + parseFloat(p2[0])) / 2;
    let y = (parseFloat(p1[1]) / 2) + parseFloat(p2[1]);
    let p3 = [ x, y ];

    // Construct the points to polygon string
    return [p1, p2, p3].map(p => p.join(',')).join(' ');
  }

  render() {
    let hex = this.props.hex;
    if (hex.props == {} || typeof(hex.props.arrows) === "undefined")
      return null;

    let arrows = hex.props.arrows;
    let points = this.props.points.split(' ');

    let polygons = points.map((point, index) => {
      if (arrows[index]) {
        let nextPoint = (index == points.length-1) ? points[0] : points[index+1];
        return this.createPointerPolygon(point, nextPoint);
      }
    });

    return (
      <g>
        {
          polygons.map((points, index) => {
            return <polygon key={index} points={points} />
          })
        }
      </g>
    );
  }
}

HexPointers.propTypes = {
  hex: object.isRequired,
  points: string.isRequired
};

export default HexPointers;
