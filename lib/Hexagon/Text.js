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
// TODO Text is a separate component so that it could wrap the given text inside the surrounding hexagon
export function Text(props) {
    const { children, x, y } = props, rest = __rest(props, ["children", "x", "y"]);
    return (_jsx("text", Object.assign({ x: x || 0, y: y ? y : "0.3em", textAnchor: "middle" }, rest, { children: children })));
}
export default Text;
//# sourceMappingURL=Text.js.map