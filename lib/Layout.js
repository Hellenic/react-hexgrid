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
import { Orientation } from "./models/Orientation";
import { Point } from "./models/Point";
export const LAYOUT_FLAT = new Orientation(3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0), 2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0, 0.0);
const LAYOUT_POINTY = new Orientation(Math.sqrt(3.0), Math.sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0, Math.sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0, 0.5);
const defaultSize = new Point(10, 10);
const defaultOrigin = new Point(0, 0);
const defaultSpacing = 1.0;
const Context = React.createContext({
    layout: {
        size: defaultSize,
        orientation: LAYOUT_FLAT,
        origin: defaultOrigin,
        spacing: defaultSpacing,
    },
    points: "",
});
export function useLayoutContext() {
    const ctx = React.useContext(Context);
    return ctx;
}
/**
 * Calculates the points for a hexagon given the radius, angle, and center
 * @param circumradius Radius of the Hexagon
 * @param angle Angle offset for the hexagon in radians
 * @param center Central point for the hexagon
 * @returns Array of 6 points
 */
export function calculateCoordinates(circumradius, angle = 0, center = new Point(0, 0)) {
    const corners = [];
    for (let i = 0; i < 6; i++) {
        const x = circumradius * Math.cos((2 * Math.PI * i) / 6 + angle);
        const y = circumradius * Math.sin((2 * Math.PI * i) / 6 + angle);
        const point = new Point(center.x + x, center.y + y);
        corners.push(point);
    }
    return corners;
}
/**
 * Provides LayoutContext for all descendands and renders child elements inside a <g> (Group) element
 */
export function Layout(_a) {
    var { size = defaultSize, flat = true, spacing = defaultSpacing, origin = defaultOrigin, children, className } = _a, rest = __rest(_a, ["size", "flat", "spacing", "origin", "children", "className"]);
    const orientation = flat ? LAYOUT_FLAT : LAYOUT_POINTY;
    const angle = flat ? 0 : Math.PI / 6;
    const cornerCoords = calculateCoordinates(size.x, angle);
    const points = cornerCoords.map((point) => `${point.x},${point.y}`).join(" ");
    const childLayout = Object.assign({}, rest, {
        orientation,
        size,
        origin,
        spacing,
    });
    return (React.createElement(Context.Provider, { value: {
            layout: childLayout,
            points,
        } },
        React.createElement("g", { className: className }, children)));
}
export default Layout;
//# sourceMappingURL=Layout.js.map