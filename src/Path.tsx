import React, { Component } from "react"
import PropTypes from "prop-types"
import HexUtils from "./HexUtils"
import { useLayoutContext } from "./Layout"

export type PathProps = {
  start: any
  end: any
}
export function Path(props: PathProps) {
  const { layout } = useLayoutContext()
  // TODO Refactor
  function getPoints() {
    const { start, end } = props
    if (!start || !end) {
      return ""
    }

    // Get all the intersecting hexes between start and end points
    let distance = HexUtils.distance(start, end)
    let intersects = []
    let step = 1.0 / Math.max(distance, 1)
    for (let i = 0; i <= distance; i++) {
      intersects.push(HexUtils.round(HexUtils.hexLerp(start, end, step * i)))
    }

    // Construct Path points out of all the intersecting hexes (e.g. M 0,0 L 10,20, L 30,20)
    let points = "M"
    points += intersects
      .map((hex) => {
        let p = HexUtils.hexToPixel(hex, layout)
        return ` ${p.x},${p.y} `
      })
      .join("L")

    return points
  }

  return <path d={getPoints()}></path>
}

export default Path
