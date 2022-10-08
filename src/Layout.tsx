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

/**
 * Calculates the points for a hexagon given the size, angle, and center
 * @param circumradius Radius of the Hexagon
 * @param angle Angle offset for the hexagon in radians
 * @param center Central point for the heaxagon
 * @returns Array of 6 points
 */

export function calculateCoordinates(
  circumradius: number,
  angle: number = 0,
  center: Point = new Point(0, 0),
  rings: number = 0,
) {
  let c: Point[] = []
  if (rings <= 0) {
    for (let i = 0; i < 6; i++) {
      const x = circumradius * Math.cos((2 * Math.PI * i) / 6 + angle)
      const y = circumradius * Math.sin((2 * Math.PI * i) / 6 + angle)
      const point = new Point(center.x + x, center.y + y)
      c.push(point)
    }
  } else if (rings == 1) {
    c = [
      new Point(center.x +( 0.5 * circumradius) , center.y + (4.3301274 * circumradius)),
      new Point(center.x +( -0.5 * circumradius),center.y +  (4.3301274 * circumradius)),
      new Point(center.x +( -0.5 * circumradius),center.y +  (4.3301274 * circumradius)),
      new Point(center.x +( -1.0 * circumradius),center.y +  (3.4641017 * circumradius)),
      new Point(center.x +( -1.0 * circumradius),center.y +  (3.4641017 * circumradius)),
      new Point(center.x +( -2.0 * circumradius),center.y +  (3.4641014 * circumradius)),
      new Point(center.x +( -2.0 * circumradius),center.y +  (3.4641014 * circumradius)),
      new Point(center.x +( -2.5 * circumradius),center.y +  (2.598076 * circumradius)),
      new Point(center.x +( -2.5 * circumradius),center.y +  (2.598076 * circumradius)),
      new Point(center.x +( -2.0 * circumradius),center.y +  (1.7320505 * circumradius)),
      new Point(center.x +( -2.0 * circumradius),center.y +  (1.7320505 * circumradius)),
      new Point(center.x +( -2.5 * circumradius),center.y +  (0.866025 * circumradius)),
      new Point(center.x +( -2.5 * circumradius),center.y +  (0.866025 * circumradius)),
      new Point(center.x +( -2.0 * circumradius),center.y +  (-4e-7 * circumradius)),
      new Point(center.x +( -2.0 * circumradius),center.y +  (-4e-7 * circumradius)),
      new Point(center.x +( -1.0 * circumradius),center.y +  (-2e-7 * circumradius)),
      new Point(center.x +( -1.0 * circumradius),center.y +  (-2e-7 * circumradius)),
      new Point(center.x +( -0.5 * circumradius),center.y +  (-0.8660254000000001 * circumradius)),
      new Point(center.x +( -0.5 * circumradius),center.y +  (-0.8660254000000001 * circumradius)),
      new Point(center.x +( 0.5 * circumradius ), center.y + (-0.8660254000000001 * circumradius)),
      new Point(center.x +( 0.5 * circumradius ), center.y + (-0.8660254000000001 * circumradius)),
      new Point(center.x +( 1.0 * circumradius ), center.y + (-2e-7 * circumradius)),
      new Point(center.x +( 1.0 * circumradius ), center.y + (-2e-7 * circumradius)),
      new Point(center.x +( 2.0 * circumradius ), center.y + (-4e-7 * circumradius)),
      new Point(center.x +( 2.0 * circumradius ), center.y + (-4e-7 * circumradius)),
      new Point(center.x +( 2.5 * circumradius ), center.y + (0.866025 * circumradius)),
      new Point(center.x +( 2.5 * circumradius ), center.y + (0.866025 * circumradius)),
      new Point(center.x +( 2.0 * circumradius ), center.y + (1.7320505 * circumradius)),
      new Point(center.x +( 2.0 * circumradius ), center.y + (1.7320505 * circumradius)),
      new Point(center.x +( 2.5 * circumradius ), center.y + (2.598076 * circumradius)),
      new Point(center.x +( 2.5 * circumradius ), center.y + (2.598076 * circumradius)),
      new Point(center.x +( 2.0 * circumradius ), center.y + (3.4641014 * circumradius)),
      new Point(center.x +( 2.0 * circumradius ), center.y + (3.4641014 * circumradius)),
      new Point(center.x +( 1.0 * circumradius ), center.y + (3.4641017 * circumradius)),
      new Point(center.x +( 1.0 * circumradius ), center.y + (3.4641017 * circumradius)),
      new Point(center.x +( 0.5 * circumradius ), center.y + (4.3301274 * circumradius)),
    ]
  } else if (rings == 2) {
    c = [
      new Point(1.0 * circumradius, (3.4641014 * circumradius)),
      new Point(0.5 * circumradius, (2.5980762 * circumradius)),
      new Point(0.5 * circumradius, (2.5980762 * circumradius)),
      new Point(-0.5 * circumradius,( 2.5980764 * circumradius)),
      new Point(-0.5 * circumradius,( 2.5980764 * circumradius)),
      new Point(-1.0 * circumradius,( 1.732051 * circumradius)),
      new Point(-1.0 * circumradius,( 1.732051 * circumradius)),
      new Point(-0.5 * circumradius,( 0.8660255 * circumradius)),
      new Point(-0.5 * circumradius,( 0.8660255 * circumradius)),
      new Point(-1.0 * circumradius,( 0.0 * circumradius)),
      new Point(-1.0 * circumradius,( 0.0 * circumradius)),
      new Point(-0.5 * circumradius,( -0.8660255 * circumradius)),
      new Point(-0.5 * circumradius,( -0.8660255 * circumradius)),
      new Point(-1.0 * circumradius,( -1.732051 * circumradius)),
      new Point(-1.0 * circumradius,( -1.732051 * circumradius)),
      new Point(-0.5 * circumradius,( -2.5980764 * circumradius)),
      new Point(-0.5 * circumradius,( -2.5980764 * circumradius)),
      new Point(0.5 * circumradius, (-2.5980764 * circumradius)),
      new Point(0.5 * circumradius, (-2.5980764 * circumradius)),
      new Point(1.0 * circumradius, (-3.4641018 * circumradius)),
      new Point(1.0 * circumradius, (-3.4641018 * circumradius)),
      new Point(2.0 * circumradius, (-3.4641018 * circumradius)),
      new Point(2.0 * circumradius, (-3.4641018 * circumradius)),
      new Point(2.5 * circumradius, (-4.3301272 * circumradius)),
      new Point(2.5 * circumradius, (-4.3301272 * circumradius)),
      new Point(3.5 * circumradius, (-4.3301272 * circumradius)),
      new Point(3.5 * circumradius, (-4.3301272 * circumradius)),
      new Point(4.0 * circumradius, (-3.4641018 * circumradius)),
      new Point(4.0 * circumradius, (-3.4641018 * circumradius)),
      new Point(5.0 * circumradius, (-3.4641018 * circumradius)),
      new Point(5.0 * circumradius, (-3.4641018 * circumradius)),
      new Point(5.5 * circumradius, (-2.5980764 * circumradius)),
      new Point(5.5 * circumradius, (-2.5980764 * circumradius)),
      new Point(6.5 * circumradius, (-2.5980764 * circumradius)),
      new Point(6.5 * circumradius, (-2.5980764 * circumradius)),
      new Point(7.0 * circumradius, (-1.732051 * circumradius)),
      new Point(7.0 * circumradius, (-1.732051 * circumradius)),
      new Point(6.5 * circumradius, (-0.8660255 * circumradius)),
      new Point(6.5 * circumradius, (-0.8660255 * circumradius)),
      new Point(7.0 * circumradius, (0.0 * circumradius)),
      new Point(7.0 * circumradius, (0.0 * circumradius)),
      new Point(6.5 * circumradius, (0.8660255 * circumradius)),
      new Point(6.5 * circumradius, (0.8660255 * circumradius)),
      new Point(7.0 * circumradius, (1.732051 * circumradius)),
      new Point(7.0 * circumradius, (1.732051 * circumradius)),
      new Point(6.5 * circumradius, (2.5980764 * circumradius)),
      new Point(6.5 * circumradius, (2.5980764 * circumradius)),
      new Point(5.5 * circumradius, (2.5980762 * circumradius)),
      new Point(5.5 * circumradius, (2.5980762 * circumradius)),
      new Point(5.0 * circumradius, (3.4641014 * circumradius)),
      new Point(5.0 * circumradius, (3.4641014 * circumradius)),
      new Point(4.0 * circumradius, (3.4641012 * circumradius)),
      new Point(4.0 * circumradius, (3.4641012 * circumradius)),
      new Point(3.5 * circumradius, (4.3301264 * circumradius)),
      new Point(3.5 * circumradius, (4.3301264 * circumradius)),
      new Point(2.5 * circumradius, (4.3301264 * circumradius)),
      new Point(2.5 * circumradius, (4.3301264 * circumradius)),
      new Point(2.0 * circumradius, (3.4641012 * circumradius)),
      new Point(2.0 * circumradius, (3.4641012 * circumradius)),
      new Point(1.0 * circumradius, (3.4641014 * circumradius)),
    ]
  } else if (rings == 3) {
    c = [
      new Point(1.0 * circumradius, (3.4641014 * circumradius)),
      new Point(0.5 * circumradius, (2.5980762 * circumradius)),
      new Point(0.5 * circumradius, (2.5980762 * circumradius)),
      new Point(-0.5 * circumradius,( 2.5980764 * circumradius)),
      new Point(-0.5 * circumradius,( 2.5980764 * circumradius)),
      new Point(-1.0 * circumradius,( 1.732051 * circumradius)),
      new Point(-1.0 * circumradius,( 1.732051 * circumradius)),
      new Point(-0.5 * circumradius,( 0.8660255 * circumradius)),
      new Point(-0.5 * circumradius,( 0.8660255 * circumradius)),
      new Point(-1.0 * circumradius,( 0.0 * circumradius)),
      new Point(-1.0 * circumradius,( 0.0 * circumradius)),
      new Point(-0.5 * circumradius,( -0.8660253 * circumradius)),
      new Point(-0.5 * circumradius,( -0.8660253 * circumradius)),
      new Point(-1.0 * circumradius,( -1.7320506 * circumradius)),
      new Point(-1.0 * circumradius,( -1.7320506 * circumradius)),
      new Point(-0.5 * circumradius,( -2.598076 * circumradius)),
      new Point(-0.5 * circumradius,( -2.598076 * circumradius)),
      new Point(-1.0 * circumradius,( -3.4641014 * circumradius)),
      new Point(-1.0 * circumradius,( -3.4641014 * circumradius)),
      new Point(-0.5 * circumradius,( -4.3301268 * circumradius)),
      new Point(-0.5 * circumradius,( -4.3301268 * circumradius)),
      new Point(0.5 * circumradius, (-4.3301268 * circumradius)),
      new Point(0.5 * circumradius, (-4.3301268 * circumradius)),
      new Point(1.0 * circumradius, (-5.1961522 * circumradius)),
      new Point(1.0 * circumradius, (-5.1961522 * circumradius)),
      new Point(2.0 * circumradius, (-5.1961522 * circumradius)),
      new Point(2.0 * circumradius, (-5.1961522 * circumradius)),
      new Point(2.5 * circumradius, (-6.0621776 * circumradius)),
      new Point(2.5 * circumradius, (-6.0621776 * circumradius)),
      new Point(3.5 * circumradius, (-6.0621776 * circumradius)),
      new Point(3.5 * circumradius, (-6.0621776 * circumradius)),
      new Point(4.0 * circumradius, (-6.928203 * circumradius)),
      new Point(4.0 * circumradius, (-6.928203 * circumradius)),
      new Point(5.0 * circumradius, (-6.928203 * circumradius)),
      new Point(5.0 * circumradius, (-6.928203 * circumradius)),
      new Point(5.5 * circumradius, (-6.0621776 * circumradius)),
      new Point(5.5 * circumradius, (-6.0621776 * circumradius)),
      new Point(6.5 * circumradius, (-6.0621776 * circumradius)),
      new Point(6.5 * circumradius, (-6.0621776 * circumradius)),
      new Point(7.0 * circumradius, (-5.1961522 * circumradius)),
      new Point(7.0 * circumradius, (-5.1961522 * circumradius)),
      new Point(8.0 * circumradius, (-5.1961522 * circumradius)),
      new Point(8.0 * circumradius, (-5.1961522 * circumradius)),
      new Point(8.5 * circumradius, (-4.3301268 * circumradius)),
      new Point(8.5 * circumradius, (-4.3301268 * circumradius)),
      new Point(9.5 * circumradius, (-4.3301268 * circumradius)),
      new Point(9.5 * circumradius, (-4.3301268 * circumradius)),
      new Point(10.0 * circumradius,( -3.4641014 * circumradius)),
      new Point(10.0 * circumradius,( -3.4641014 * circumradius)),
      new Point(9.5 * circumradius, (-2.598076 * circumradius)),
      new Point(9.5 * circumradius, (-2.598076 * circumradius)),
      new Point(10.0 * circumradius,( -1.7320506 * circumradius)),
      new Point(10.0 * circumradius,( -1.7320506 * circumradius)),
      new Point(9.5 * circumradius, (-0.8660253 * circumradius)),
      new Point(9.5 * circumradius, (-0.8660253 * circumradius)),
      new Point(10.0 * circumradius,( 0.0 * circumradius)),
      new Point(10.0 * circumradius,( 0.0 * circumradius)),
      new Point(9.5 * circumradius, (0.8660255 * circumradius)),
      new Point(9.5 * circumradius, (0.8660255 * circumradius)),
      new Point(10.0 * circumradius,( 1.732051 * circumradius)),
      new Point(10.0 * circumradius,( 1.732051 * circumradius)),
      new Point(9.5 * circumradius, (2.5980764 * circumradius)),
      new Point(9.5 * circumradius, (2.5980764 * circumradius)),
      new Point(8.5 * circumradius, (2.5980762 * circumradius)),
      new Point(8.5 * circumradius, (2.5980762 * circumradius)),
      new Point(8.0 * circumradius, (3.4641014 * circumradius)),
      new Point(8.0 * circumradius, (3.4641014 * circumradius)),
      new Point(7.0 * circumradius, (3.4641017 * circumradius)),
      new Point(7.0 * circumradius, (3.4641017 * circumradius)),
      new Point(6.5 * circumradius, (4.3301274 * circumradius)),
      new Point(6.5 * circumradius, (4.3301274 * circumradius)),
      new Point(5.5 * circumradius, (4.330127200000001 * circumradius)),
      new Point(5.5 * circumradius, (4.330127200000001 * circumradius)),
      new Point(5.0 * circumradius, (5.1961524 * circumradius)),
      new Point(5.0 * circumradius, (5.1961524 * circumradius)),
      new Point(4.0 * circumradius, (5.1961524 * circumradius)),
      new Point(4.0 * circumradius, (5.1961524 * circumradius)),
      new Point(3.5 * circumradius, (4.3301272 * circumradius)),
      new Point(3.5 * circumradius, (4.3301272 * circumradius)),
      new Point(2.5 * circumradius, (4.330127399999999 * circumradius)),
      new Point(2.5 * circumradius, (4.330127399999999 * circumradius)),
      new Point(2.0 * circumradius, (3.4641017 * circumradius)),
      new Point(2.0 * circumradius, (3.4641017 * circumradius)),
      new Point(1.0 * circumradius, (3.4641014 * circumradius)),
    ]
  }

  return c
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
  /* defines scale */
  size?: Size
  space?: number
  spacing?: number
}

/**
 * Provides LayoutContext for all descendands and renders child elements inside a <g> (Group) element
 */
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
  const angle = flat ? 0 : Math.PI / 6
  const cornerCoords = calculateCoordinates(size.x, angle)
  const points = cornerCoords.map((point) => `${point.x},${point.y}`).join(" ")
  const childLayout = Object.assign({}, rest, {
    orientation,
    size,
    origin,
    spacing,
  })

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
