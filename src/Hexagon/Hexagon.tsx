import * as React from "react"
import classNames from "classnames"
import { Hex } from "../models/Hex"
import { HexUtils } from "../HexUtils"
import { useLayoutContext, calculateCoordinates } from "../Layout"
import { Point } from "../models/Point"
import Pattern from "../Pattern"

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

export type HexagonProps = {
  q: number
  r: number
  s: number
  rings?: number
  fill?: string
  fillUrl?: string
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
}

type TargetProps = {
  hex: Hex
  pixel: Point
  data?: any
  fill?: string
  fillUrl?: string
  className?: string
}

/**
 * Renders a Hexagon cell at the given rqs-based coordinates.
 */
export function Hexagon(
  props: HexagonProps &
    Omit<
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
    >,
) {
  // destructure props into their values
  const {
    q,
    r,
    s,
    rings = 0,
    fill,
    fillUrl,
    fillRule,
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
  let q2 = q ;
  let r2 = r ;
  let s2 = s ;
  if (rings == 1) {
    r2 -= 1;
  } else if (rings == 2)
  {
    q2 -= 2;
    r2 += 1;
  }

  const cornerCoords = calculateCoordinates(layout.size.x, 0, new Point(0, 0), rings)
  const ps = cornerCoords.map((point) => `${point.x},${point.y}`).join(" ")

  const { hex, pixel } = React.useMemo(() => {
    const hex = new Hex(q2, r2, s2)
    const pixel = HexUtils.hexToPixel(hex, layout)
    return {
      hex,
      pixel,
    }
  }, [q, r, s, layout])

  // for backwards comapatbility
  const state = { hex }

  // Generate id for local pattern
  const patId = fillUrl ? React.useMemo(() => Math.random().toString(36).substr(2, 9), []) : undefined
  
  // if fill point to existing pattern, if fillUrl point to local pattern, otherwise default styling
  const fillId = fill ? `url(#${fill})` : fillUrl ? `url(#${patId})` : undefined
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
        <polygon points={ps} fill={fillId} style={cellStyle} />
        {children}
        {patId ? (

        <Pattern
          id={`${patId}`}
          link={fillUrl}
          size={new Point((rings+1)*20, (rings+1)*20)}
        />
        ) : null}
      </g>
    </g>
  )
}

export default Hexagon
