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
export function HexGrid(_a) {
    var { width = 800, height = 600, viewBox = "-50 -50 100 100" } = _a, props = __rest(_a, ["width", "height", "viewBox"]);
    return (_jsx("svg", Object.assign({ className: "grid", width: width, height: height, viewBox: viewBox, version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, props)));
}
export default HexGrid;
//# sourceMappingURL=HexGrid.js.map