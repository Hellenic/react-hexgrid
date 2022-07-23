import * as React from "react"
import { Orientation } from "./models/Orientation"
import { Coordinates as Point } from "./models/Point"

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
const defaultSize: Size = { x: 10, y: 10 }
const defaultOrigin: Point = { x: 0, y: 0 }
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

/**
 * Calculates the points for a hexagon given the size, angle, and center
 * @param circumradius Radius of the Hexagon
 * @param angle Angle offset for the hexagon in radians
 * @param center Central point for the heaxagon
 * @returns Array of 6 points
 */
function calculateCoordinates(
  circumradius: Size,
  angle: number = 0,
  center: Point = { x: 0, y: 0 },
) {
  const corners: Point[] = []

  for (let i = 0; i < 6; i++) {
    const x = circumradius.x * Math.cos((2 * Math.PI * i) / 6 + angle)
    const y = circumradius.y * Math.sin((2 * Math.PI * i) / 6 + angle)
    const point: Point = { x: center.x + x, y: center.y + y }
    corners.push(point)
  }

  return corners
}

export type LayoutProps = {
  children:
    | React.ReactElement
    | React.ReactElement[]
    | JSX.Element
    | JSX.Element[]
  // className?: string
  flat?: boolean
  origin?: any
  /* defines scale */
  size?: Size
  // space?: number
  spacing?: number
}

/**
 * Provides LayoutContext for all descendands and renders child elements inside a <g> (Group) element
 */
export function Layout({
  size = defaultSize,
  flat = false,
  spacing = defaultSpacing,
  origin = defaultOrigin,
  children,
}: LayoutProps) {
  const orientation = flat ? LAYOUT_FLAT : LAYOUT_POINTY
  const angle = flat ? 0 : Math.PI / 6
  const cornerCoords = calculateCoordinates(size, angle)
  const points = cornerCoords.map((point) => `${point.x},${point.y}`).join(" ")

  return (
    <Context.Provider
      value={{
        layout: {
          orientation,
          size,
          origin,
          spacing,
        },
        points,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Layout
