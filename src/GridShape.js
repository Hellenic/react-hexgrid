import React from 'react'
const { array, number, object } = React.PropTypes
import ShapeGroup from './ShapeGroup'
import css from './shape.css'

class GridShape extends React.Component {

  render() {
    return (
      <svg className={css.grid} width={this.props.width} height={this.props.height} viewBox="-50 -50 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        {
          this.props.hexagons.map((hex, index) => {
            return (<ShapeGroup key={index} hex={hex} layout={this.props.layout} />);
          })
        }
      </svg>
    );
  }

}

GridShape.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  hexagons: array.isRequired,
  layout: object.isRequired
};

GridShape.defaultProps = {
  width: 800,
  height: 600
}

export default GridShape;
