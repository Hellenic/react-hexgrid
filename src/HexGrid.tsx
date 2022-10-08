import React, { Component } from "react"

type Props = {} & React.SVGProps<SVGSVGElement>

/**
 * Simple renders an `<svg>` container element for SVG graphics.
 * This component does not do anything special other than applying some defaults to the svg container if not provided.
 * The HexGrid should be used as the outer container for one or several `<Layouts>`.
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
