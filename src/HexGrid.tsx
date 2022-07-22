import React, { Component } from "react"

type Props = {} & React.SVGProps<SVGSVGElement>

/**
 * Creates an <svg> container element for SVG graphics
 * This will contain one or more Layouts
 * @param {Props} SVGProps 
 * @param {number} SVGProps.width - width of the SVG Container in px
 * @param {number} SVGProps.height - height of the SVG container in px
 * @param {string} SVGProps.viewBox - the container's internal coordinate system
 * @returns
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
