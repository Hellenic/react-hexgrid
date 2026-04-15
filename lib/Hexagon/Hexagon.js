var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
//import classNames from "classnames"
import { Hex } from "../models/Hex";
import { HexUtils } from "../HexUtils";
import { useLayoutContext } from "../Layout";
import { Point } from "../models/Point";
import { LAYOUT_FLAT } from "../Layout";
import { calculateCoordinates } from "../Layout";
/**
 * Renders a Hexagon cell at the given qrs-based coordinates.
 */
export function Hexagon(props) {
    // destructure props into their values
    const { q, r, s, fill, cellStyle, style, className, radius, children, onDragStart, onDragEnd, onDrop, onDragOver, onMouseEnter, onMouseLeave, onMouseOver, onClick, data, fillOpacity } = props, rest = __rest(props
    // const { layout, points } = useLayoutContext()
    /*
    from ../Layout.tsx
    
    */
    /**
     * Hexagons need default size, origin, and spacing values to be rendered.
     * These are the default values used if no layout is provided.
     * These are copied from Layout.tsx
     */
    , ["q", "r", "s", "fill", "cellStyle", "style", "className", "radius", "children", "onDragStart", "onDragEnd", "onDrop", "onDragOver", "onMouseEnter", "onMouseLeave", "onMouseOver", "onClick", "data", "fillOpacity"]);
    // const { layout, points } = useLayoutContext()
    /*
    from ../Layout.tsx
    
    */
    /**
     * Hexagons need default size, origin, and spacing values to be rendered.
     * These are the default values used if no layout is provided.
     * These are copied from Layout.tsx
     */
    const defaultSize = new Point(10, 10);
    const defaultOrigin = new Point(0, 0);
    const defaultSpacing = 1.0;
    const flatDefaultLayout = ({
        size: defaultSize,
        orientation: LAYOUT_FLAT,
        origin: defaultOrigin,
        spacing: defaultSpacing,
    });
    // Here we look for a layout context (layout parent).  If it isn't there, we use the default.
    const layout = useLayoutContext().layout || flatDefaultLayout;
    // if radius is set, we use that, otherwise we know layout is guaranteed so we can safely use that
    const smartRadius = radius || layout.size.x;
    const points = useLayoutContext().points || calculateCoordinates(smartRadius).map((point) => `${point.x},${point.y}`).join(" ");
    const { hex, pixel } = React.useMemo(() => {
        const hex = new Hex(q, r, s);
        const pixel = HexUtils.hexToPixel(hex, layout);
        return {
            hex,
            pixel,
        };
    }, [q, r, s, layout]);
    // for backwards comapatbility
    const state = { hex };
    // the fill prop used to be set to fillId.  However, it doesn't work and throughout the code
    // we just use css with the g or polygon selectors to set fill.
    // I'm actually not sure what this prop and variable are supposed to do
    const fillId = fill ? `url(#${fill})` : undefined;
    const draggable = { draggable: true };
    return (React.createElement("g", Object.assign({ className: className, transform: `translate(${pixel.x}, ${pixel.y})` }, rest, draggable, { onDragStart: (e) => {
            if (onDragStart) {
                const targetProps = {
                    hex: hex,
                    pixel,
                    data: data,
                    fill: fill,
                    className: className,
                };
                e.dataTransfer.setData("hexagon", JSON.stringify(targetProps));
                onDragStart(e, { data, state, props });
            }
        }, onDragEnd: (e) => {
            if (onDragEnd) {
                e.preventDefault();
                const success = e.dataTransfer.dropEffect !== "none";
                onDragEnd(e, { state, props }, success);
            }
        }, onDrop: (e) => {
            if (onDrop) {
                e.preventDefault();
                const target = JSON.parse(e.dataTransfer.getData("hexagon"));
                onDrop(e, { data, state, props }, target);
            }
        }, onDragOver: (e) => {
            if (onDragOver) {
                onDragOver(e, { data, state, props });
            }
        }, onMouseEnter: (e) => {
            if (onMouseEnter) {
                onMouseEnter(e, { data, state, props });
            }
        }, onClick: (e) => {
            if (onClick) {
                onClick(e, { data, state, props });
            }
        }, onMouseOver: (e) => {
            if (onMouseOver) {
                onMouseOver(e, { data, state, props });
            }
        }, onMouseLeave: (e) => {
            if (onMouseLeave) {
                onMouseLeave(e, { data, state, props });
            }
        } }),
        React.createElement("g", { className: "hexagon" },
            React.createElement("polygon", { points: points, fill: fillId, style: cellStyle || style }),
            children)));
}
export default Hexagon;
//# sourceMappingURL=Hexagon.js.map