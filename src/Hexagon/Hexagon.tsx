import * as React from "react"
import classNames from "classnames"
import { Hex, HexCoordinates, qrs } from "../models/Hex"
import { HexUtils } from "../HexUtils"
import { useLayoutContext } from "../Layout"
import { Coordinates, Point } from "../models/Point"

type H = { data?: any; state: { hex: Hex }; props: HexagonProps }

export type HexagonDragEventHandler<T = Element, AdditionalData = any> = (
  event: React.DragEvent<T>,
  h: H,
  additionalData?: AdditionalData,
) => void

export type HexagonDragDropEventHandler<T = Element, AdditionalData = any> = (
  event: React.DragEvent<T>,
  h: H,
  additionalData: AdditionalData,
) => void

export type HexagonMouseEventHandler<T = SVGGElement> = (
  event: React.MouseEvent<T, globalThis.MouseEvent>,
  h: H,
) => void

type NewHexagonProps = {
  position: HexCoordinates
  // children?: React.ReactNode | React.ReactNode[]
} & React.SVGProps<SVGPolygonElement>

export type HexagonLegacyProps = {
  q: number
  r: number
  s: number
  fill?: string
  className?: string
  cellStyle?: React.CSSProperties | undefined
  data?: any
  onMouseEnter?: HexagonMouseEventHandler
  onMouseLeave?: HexagonMouseEventHandler
  onClick?: HexagonMouseEventHandler
  onDragStart?: HexagonDragEventHandler
  onDragEnd?: HexagonDragEventHandler
  onDragOver?: HexagonDragEventHandler
  onDrop?: HexagonDragDropEventHandler<any, TargetProps>
  onMouseOver?: HexagonMouseEventHandler
  children?: React.ReactNode | React.ReactNode[]
} & Omit<
  React.SVGProps<SVGGElement>,
  | "transform"
  | "onDragStart"
  | "onDragEnd"
  | "onDrop"
  | "onDragOver"
  | "onMouseEnter"
  | "onClick"
  | "onMouseOver"
  | "onMouseLeave"
>

type HexagonProps = NewHexagonProps | HexagonLegacyProps

type TargetProps = {
  hex: Hex
  pixel: Point
  data?: any
  fill?: string
  className?: string
}

function isLegacyProps(p: HexagonProps): p is HexagonLegacyProps {
  return Object.hasOwn(p, "q") && Object.hasOwn(p, "r") && Object.hasOwn(p, "s")
}

function isNewProps(p: HexagonProps): p is NewHexagonProps {
  return Object.hasOwn(p, "position")
}

export function LegacyHexagon(props: HexagonLegacyProps) {
  // destructure props into their values
  const {
    q,
    r,
    s,
    fill,
    cellStyle,
    className,
    children,
    onDragStart,
    onDragEnd,
    onDrop,
    onDragOver,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    onClick,
    data,
    fillOpacity,
    ...rest
  } = props

  const { layout, points } = useLayoutContext()

  const { hex, pixel } = React.useMemo(() => {
    const hex = new Hex(q, r, s)
    const pixel = HexUtils.hexToPixel(hex, layout)
    return {
      hex,
      pixel,
    }
  }, [q, r, s, layout])

  // for backwards comapatbility
  const state = { hex }

  const fillId = fill ? `url(#${fill})` : undefined
  const draggable = { draggable: true } as any
  return (
    <g
      className={classNames("hexagon-group", className)}
      transform={`translate(${pixel.x}, ${pixel.y})`}
      {...rest}
      {...draggable}
      onDragStart={(e) => {
        if (onDragStart) {
          const targetProps: TargetProps = {
            hex: hex,
            pixel,
            data: data,
            fill: fill,
            className: className,
          }
          e.dataTransfer.setData("hexagon", JSON.stringify(targetProps))
          onDragStart(e, { data, state, props })
        }
      }}
      onDragEnd={(e) => {
        if (onDragEnd) {
          e.preventDefault()
          const success = e.dataTransfer.dropEffect !== "none"
          onDragEnd(e, { state, props }, success)
        }
      }}
      onDrop={(e) => {
        if (onDrop) {
          e.preventDefault()
          const target = JSON.parse(e.dataTransfer.getData("hexagon"))
          onDrop(e, { data, state, props }, target)
        }
      }}
      onDragOver={(e) => {
        if (onDragOver) {
          onDragOver(e, { data, state, props })
        }
      }}
      onMouseEnter={(e) => {
        if (onMouseEnter) {
          onMouseEnter(e, { data, state, props })
        }
      }}
      onClick={(e) => {
        if (onClick) {
          onClick(e, { data, state, props })
        }
      }}
      onMouseOver={(e) => {
        if (onMouseOver) {
          onMouseOver(e, { data, state, props })
        }
      }}
      onMouseLeave={(e) => {
        if (onMouseLeave) {
          onMouseLeave(e, { data, state, props })
        }
      }}
    >
      <g className="hexagon">
        <polygon points={points} fill={fillId} style={cellStyle} />
        {children}
      </g>
    </g>
  )
}

export function Qrs({
  p,
  children,
}: {
  p: HexCoordinates
  children: ({
    pixel,
    transform,
  }: {
    pixel: Coordinates
    transform: string
    points: string
  }) => JSX.Element
}): JSX.Element {
  const { layout, points } = useLayoutContext()

  const pixel = React.useMemo(() => {
    const pixel = HexUtils.hexToPixel(p, layout)
    return pixel
  }, [p, layout])

  const transform = `translate(${pixel.x}, ${pixel.y})`
  return children({ pixel, transform, points })
}

export function NewHexagon(props: NewHexagonProps) {
  // destructure props into their values

  const { layout, points } = useLayoutContext()

  const { hex, pixel } = React.useMemo(() => {
    const hex = props.position
    const pixel = HexUtils.hexToPixel(hex, layout)
    return {
      hex,
      pixel,
    }
  }, [props.position, layout])
  const { position, children, className, ...rest } = props

  return (
    <g transform={`translate(${pixel.x}, ${pixel.y})`}>
      <polygon points={points} {...rest} />
      {children}
    </g>
  )
}

/**
 * Renders a Hexagon cell at the given rqs-based coordinates.
 */
export function Hexagon(p: HexagonProps) {
  if (isLegacyProps(p)) {
    return <LegacyHexagon {...p} />
  } else if (isNewProps(p)) {
    return <NewHexagon {...p} />
  }
  return null
}

export default Hexagon
