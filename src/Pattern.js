import React, { Component } from "react"
import PropTypes from "prop-types"
import HexUtils from "./HexUtils"
import Point from "./models/Point"
import { Size } from "./Layout"

export type PatternProps = {
  id: string
  link: string
  size?: Size
}
const defaultSize = new Point(10, 10)

export function Pattern({ id, link, size = defaultSize }: PatternProps) {
  // static propTypes = {
  //   id: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   size: PropTypes.object
  // };
  // static defaultProps = {
  //   size: new Point(10, 10)
  // };

  // const { id, link, size } = this.props;

  return (
    <defs>
      <pattern
        id={id}
        patternUnits="objectBoundingBox"
        x={0}
        y={0}
        width={size.x}
        height={size.y}
      >
        <image
          xlinkHref={link}
          x={0}
          y={0}
          width={size.x * 2}
          height={size.y * 2}
        />
      </pattern>
    </defs>
  )
}

export default Pattern
