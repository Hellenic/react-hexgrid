import React from 'react';
const { object, string } = React.PropTypes
import HexUtils from './HexUtils';

class HexPointers extends React.Component {

  createPointerPolygon(point1, point2) {
    let p1 = point1.split(',');
    let p2 = point2.split(',');
    let a = { x: parseFloat(p1[0]), y: parseFloat(p1[1]) };
    let b = { x: parseFloat(p2[0]), y: parseFloat(p2[1]) };
    let c = { x: (a.x+b.x)/2, y: (a.y+b.y)/2 };

    let x = { x: (b.x+c.x)*0.7, y: (b.y+c.y)*0.7 };

    // Construct the points to polygon string
    return [b, c, x].map(p => p.x +','+ p.y).join(' ');
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
