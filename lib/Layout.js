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
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Orientation } from "./models/Orientation";
import { Point } from "./models/Point";
const LAYOUT_FLAT = new Orientation(3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0), 2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0, 0.0);
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
 * Calculates the points for a hexagon given the size, angle, and center
 * @param circumradius Radius of the Hexagon
 * @param angle Angle offset for the hexagon in radians
 * @param center Central point for the heaxagon
 * @returns Array of 6 points
 */
export function calculateCoordinates(circumradius, angle = 0, center = new Point(0, 0), rings = 0) {
    let c = [];
    if (rings <= 0) {
        for (let i = 0; i < 6; i++) {
            const x = circumradius * Math.cos((2 * Math.PI * i) / 6 + angle);
            const y = circumradius * Math.sin((2 * Math.PI * i) / 6 + angle);
            const point = new Point(center.x + x, center.y + y);
            c.push(point);
        }
    }
    else {
        c = [
            new Point(3.5, -6.0621779),
            new Point(7.0, -12.124356),
            new Point(14.0, -12.124356),
            new Point(17.5, -6.062177900000001),
            new Point(24.5, -6.062177800000001),
            new Point(28.0, 0.0),
            new Point(24.5, 6.0621775),
            new Point(28.0, 12.124355),
            new Point(24.5, 18.186533),
            new Point(17.5, 18.186533),
            new Point(14.0, 24.248711),
            new Point(7.0, 24.248711),
            new Point(3.5, 18.186533),
            new Point(-3.5, 18.186533),
            new Point(-7.0, 12.124355),
            new Point(-3.5, 6.0621775),
            new Point(-7.0, 0.0),
            new Point(-3.5, -6.0621778),
            new Point(3.5, -6.0621779)
        ];
    }
    return c;
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
    return (_jsx(Context.Provider, Object.assign({ value: {
            layout: childLayout,
            points,
        } }, { children: _jsx("g", Object.assign({ className: className }, { children: children })) })));
}
export default Layout;
//# sourceMappingURL=Layout.js.map