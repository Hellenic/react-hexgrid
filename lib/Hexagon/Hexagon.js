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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import classNames from "classnames";
import { Hex } from "../models/Hex";
import { HexUtils } from "../HexUtils";
import { useLayoutContext, calculateCoordinates } from "../Layout";
import { Point } from "../models/Point";
/**
 * Renders a Hexagon cell at the given rqs-based coordinates.
 */
export function Hexagon(props) {
    // destructure props into their values
    const { q, r, s, rings, fill, cellStyle, className, children, onDragStart, onDragEnd, onDrop, onDragOver, onMouseEnter, onMouseLeave, onMouseOver, onClick, data, fillOpacity } = props, rest = __rest(props, ["q", "r", "s", "rings", "fill", "cellStyle", "className", "children", "onDragStart", "onDragEnd", "onDrop", "onDragOver", "onMouseEnter", "onMouseLeave", "onMouseOver", "onClick", "data", "fillOpacity"]);
    const { layout, points } = useLayoutContext();
    let q2 = q;
    let r2 = r;
    let s2 = s;
    if (rings == 1) {
        r2 -= 1;
    }
    else if (rings == 2) {
        q2 -= 2;
        r2 += 1;
    }
    const cornerCoords = calculateCoordinates(layout.size.x, 0, new Point(0, 0), rings);
    const ps = cornerCoords.map((point) => `${point.x},${point.y}`).join(" ");
    const { hex, pixel } = React.useMemo(() => {
        const hex = new Hex(q2, r2, s2);
        const pixel = HexUtils.hexToPixel(hex, layout);
        return {
            hex,
            pixel,
        };
    }, [q, r, s, layout]);
    // for backwards comapatbility
    const state = { hex };
    const fillId = fill ? `url(#${fill})` : undefined;
    const draggable = { draggable: true };
    return (_jsx("g", Object.assign({ className: classNames("hexagon-group", className), transform: `translate(${pixel.x}, ${pixel.y})` }, rest, draggable, { onDragStart: (e) => {
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
        } }, { children: _jsxs("g", Object.assign({ className: "hexagon" }, { children: [_jsx("polygon", { points: ps, fill: fillId, style: cellStyle }), children] })) })));
}
export default Hexagon;
//# sourceMappingURL=Hexagon.js.map