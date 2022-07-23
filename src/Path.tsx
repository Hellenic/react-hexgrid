import * as React from "react"
import { HexUtils } from "./HexUtils"
import { useLayoutContext } from "./Layout"
import { Hex } from "./models/Hex"

export type PathProps = {
  start: any
  end?: any
} & Omit<React.SVGProps<SVGPathElement>, "start" | "end">

/**
 * Renders an svg `<path>` component with points on the grid between a qrs-based `start` and `end` coordinates.
 */
export function Path({ start, end, ...props }: PathProps) {
  const { layout } = useLayoutContext()
  // TODO Refactor
  function getPoints() {
    if (!start || !end) {
      return ""
    }

    // Get all the intersecting hexes between start and end points
    let distance = HexUtils.distance(start, end)
    let intersects: Hex[] = []
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

  return <path {...props} d={getPoints()}></path>
}

export default Path
