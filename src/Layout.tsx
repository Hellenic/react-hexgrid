import * as React from "react"
import { Orientation } from "./models/Orientation"
import { Point } from "./models/Point"

export type Size = { x: number; y: number }

export type LayoutDimension = {
  size: Size
  orientation: Orientation
  origin: Size
  spacing: number
}
export type LayoutContextProps = {
  layout: LayoutDimension
  points: string
}

const LAYOUT_FLAT = new Orientation(
  3.0 / 2.0,
  0.0,
  Math.sqrt(3.0) / 2.0,
  Math.sqrt(3.0),
  2.0 / 3.0,
  0.0,
  -1.0 / 3.0,
  Math.sqrt(3.0) / 3.0,
  0.0,
)
const LAYOUT_POINTY = new Orientation(
  Math.sqrt(3.0),
  Math.sqrt(3.0) / 2.0,
  0.0,
  3.0 / 2.0,
  Math.sqrt(3.0) / 3.0,
  -1.0 / 3.0,
  0.0,
  2.0 / 3.0,
  0.5,
)
const defaultSize = new Point(10, 10)
const defaultOrigin = new Point(0, 0)
const defaultSpacing = 1.0

const Context = React.createContext<LayoutContextProps>({
  layout: {
    size: defaultSize,
    orientation: LAYOUT_FLAT,
    origin: defaultOrigin,
    spacing: defaultSpacing,
  },
  points: "",
})

export function useLayoutContext() {
  const ctx = React.useContext(Context)
  return ctx
}

function getPointOffset(corner, orientation: Orientation, size: Size) {
  let angle = (2.0 * Math.PI * (corner + orientation.startAngle)) / 6
  return new Point(size.x * Math.cos(angle), size.y * Math.sin(angle))
}

// TODO Refactor
function calculateCoordinates(orientation: Orientation, size: Size) {
  const corners = []
  const center = new Point(0, 0)

  Array.from(new Array(6), (x, i) => {
    const offset = getPointOffset(i, orientation, size)
    const point = new Point(center.x + offset.x, center.y + offset.y)
    corners.push(point)
  })

  return corners
}

export type LayoutProps = {
  children:
    | React.ReactElement
    | React.ReactElement[]
    | JSX.Element
    | JSX.Element[]
  className?: string
  flat?: boolean
  origin?: any
  size?: Size
  spacing?: number
}

export function Layout({
  size = defaultSize,
  flat = true,
  spacing = defaultSpacing,
  origin = defaultOrigin,
  children,
  className,
  ...rest
}: LayoutProps) {
  const orientation = flat ? LAYOUT_FLAT : LAYOUT_POINTY
  const cornerCoords = calculateCoordinates(orientation, size)
  const points = cornerCoords.map((point) => `${point.x},${point.y}`).join(" ")
  const childLayout = Object.assign({}, rest, {
    orientation,
    size,
    origin,
    spacing,
  })

  // console.log({ childLayout })

  return (
    <Context.Provider
      value={{
        layout: childLayout,
        points,
      }}
    >
      <g className={className}>{children}</g>
    </Context.Provider>
  )
}

export default Layout
