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
import { HexUtils } from "./HexUtils";
import { useLayoutContext } from "./Layout";
/**
 * Renders an svg `<path>` component with points on the grid between a qrs-based `start` and `end` coordinates.
 */
export function Path(_a) {
    var { start, end } = _a, props = __rest(_a, ["start", "end"]);
    const { layout } = useLayoutContext();
    // TODO Refactor
    function getPoints() {
        if (!start || !end) {
            return "";
        }
        // Get all the intersecting hexes between start and end points
        let distance = HexUtils.distance(start, end);
        let intersects = [];
        let step = 1.0 / Math.max(distance, 1);
        for (let i = 0; i <= distance; i++) {
            intersects.push(HexUtils.round(HexUtils.hexLerp(start, end, step * i)));
        }
        // Construct Path points out of all the intersecting hexes (e.g. M 0,0 L 10,20, L 30,20)
        let points = "M";
        points += intersects
            .map((hex) => {
            let p = HexUtils.hexToPixel(hex, layout);
            return ` ${p.x},${p.y} `;
        })
            .join("L");
        return points;
    }
    return _jsx("path", Object.assign({}, props, { d: getPoints() }));
}
export default Path;
//# sourceMappingURL=Path.js.map