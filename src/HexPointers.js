import React from 'react';
const { object, string } = React.PropTypes
import HexUtils from './HexUtils';

class HexPointers extends React.Component {

  createPointerPolygon(corner1, corner2) {
    let p1 = corner1.split(',');
    let p2 = corner2.split(',');
    let a = { x: parseFloat(p1[0]), y: parseFloat(p1[1]) };
    let b = { x: parseFloat(p2[0]), y: parseFloat(p2[1]) };
    let c = { x: (a.x+b.x)/2, y: (a.y+b.y)/2 };

    let x = { x: (b.x+c.x)*0.7, y: (b.y+c.y)*0.7 };

    // Construct the points to polygon string
    return [b, c, x].map(p => p.x +','+ p.y).join(' ');
  }

  createPointerArc(corner1, corner2) {
    let c1 = corner1.split(',');
    let c2 = corner2.split(',');
    let p1 = { x: parseFloat(c1[0]), y: parseFloat(c1[1]) };
    let p2 = { x: parseFloat(c2[0]), y: parseFloat(c2[1]) };

    let a = { x: (p1.x+p2.x)/2, y: (p1.y+p2.y)/2 };
    let b = p2;

    let size = 1.2;
    let ax = { x: a.x*size, y: a.y*size };
    let bx = { x: b.x*size, y: b.y*size };

    return `M${a.x},${a.y} C${ax.x},${ax.y} ${bx.x},${bx.y} ${b.x},${b.y}`;
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
        // return this.createPointerPolygon(point, nextPoint);
        return this.createPointerArc(point, nextPoint);
      }
    });

    return (
      <g>
        {
          polygons.map((points, index) => {
            // return <polygon key={index} points={points} />
            return <path d={points} />
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
