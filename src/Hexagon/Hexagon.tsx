import * as React from "react"
import classNames from "classnames"
import { Hex } from "../models/Hex"
import HexUtils from "../HexUtils"
import { useLayoutContext } from "../Layout"

type H = { data?: any; state: { hex: Hex }; props?: { fill?: string } }

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
  fill?: string
  className?: string
  cellStyle?: React.CSSProperties | undefined
  data?: any
  onDragStart?: HexagonDragEventHandler
  onDragEnd?: HexagonDragEventHandler
  onDrop?: HexagonDragDropEventHandler<any, TargetProps>
  onDragOver?: HexagonDragEventHandler
  onMouseEnter?: HexagonMouseEventHandler
  onMouseLeave?: HexagonMouseEventHandler
  onClick?: HexagonMouseEventHandler
  onMouseOver?: HexagonMouseEventHandler
  children?: React.ReactNode | React.ReactNode[]
}

type TargetProps = {
  hex: Hex
  data?: any
  fill?: string
  className?: string
}

export function Hexagon({
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
}: HexagonProps &
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
  >) {
  const { layout, points } = useLayoutContext()

  const { hex, pixel } = React.useMemo(() => {
    const hex = new Hex(q, r, s)
    // console.log({ hex, layout })
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
      // {...rest}
      {...draggable}
      onDragStart={(e) => {
        if (onDragStart) {
          const targetProps: TargetProps = {
            hex: hex,
            // state: { hex, pixel },
            // ...{ hex, pixel },
            // ...this.state,
            data: data,
            fill: fill,
            className: className,
          }
          e.dataTransfer.setData("hexagon", JSON.stringify(targetProps))
          onDragStart(e, { data, state })
        }
      }}
      onDragEnd={(e) => {
        if (onDragEnd) {
          e.preventDefault()
          const success = e.dataTransfer.dropEffect !== "none"
          onDragEnd(e, { state }, success)
        }
      }}
      onDrop={(e) => {
        if (onDrop) {
          e.preventDefault()
          const target = JSON.parse(e.dataTransfer.getData("hexagon"))
          onDrop(e, { data, state }, target)
        }
      }}
      onDragOver={(e) => {
        if (onDragOver) {
          onDragOver(e, { data, state })
        }
      }}
      onMouseEnter={(e) => {
        if (onMouseEnter) {
          onMouseEnter(e, { data, state })
        }
      }}
      // onMouseOver={(e) => this.onMouseOver(e)}
      onClick={(e) => {
        if (onClick) {
          onClick(e, { data, state })
        }
      }}
      onMouseOver={(e) => {
        if (onMouseOver) {
          onMouseOver(e, { data, state })
        }
      }}
      onMouseLeave={(e) => {
        if (onMouseLeave) {
          onMouseLeave(e, { data, state })
        }
      }}

      // onDragStart={(e) => this.onDragStart(e)}
      // onDragEnd={(e) => this.onDragEnd(e)}
      // onDragOver={(e) => this.onDragOver(e)}
      // onDrop={(e) => this.onDrop(e)}
    >
      <g className="hexagon">
        <polygon points={points} fill={fillId} style={cellStyle} />
        {children}
      </g>
    </g>
  )
}

export default Hexagon
