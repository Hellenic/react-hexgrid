import { jsx as _jsx } from "react/jsx-runtime";
import Point from "./models/Point";
const defaultSize = new Point(10, 10);
/**
 * Defines an `<defs><pattern><image>` group (will not be rendered) in order to allow defining images.
 * The given id can be used on the `Hexagon` to render the image
 */
export function Pattern({ id, link, size = defaultSize }) {
    return (_jsx("defs", { children: _jsx("pattern", Object.assign({ id: id, patternUnits: "objectBoundingBox", x: 0, y: 0, width: size.x, height: size.y }, { children: _jsx("image", { xlinkHref: link, x: 0, y: 0, width: size.x * 2, height: size.y * 2 }) })) }));
}
export default Pattern;
//# sourceMappingURL=Pattern.js.map