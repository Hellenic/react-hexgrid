import React from "react";
declare type Props = {} & React.SVGProps<SVGSVGElement>;
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
export declare function HexGrid({ width, height, viewBox, ...props }: Props): JSX.Element;
export default HexGrid;
//# sourceMappingURL=HexGrid.d.ts.map