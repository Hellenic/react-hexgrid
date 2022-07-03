import React, { Component } from "react"

type Props = {} & React.SVGProps<SVGSVGElement>

/**
 * Renders an svg element
 */
export function HexGrid({
  width = 800,
  height = 600,
  viewBox = "-50 -50 100 100",
  ...props
}: Props) {
  return (
    <svg
      className="grid"
      width={width}
      height={height}
      viewBox={viewBox}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    />
  )
}
export default HexGrid
