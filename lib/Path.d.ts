import React from "react";
import { Hex } from "./models/Hex";
export type PathProps = {
    start: Hex;
    end?: Hex;
} & Omit<React.SVGProps<SVGPathElement>, "start" | "end">;
/**
 * Renders an svg `<path>` component with points on the grid between a qrs-based `start` and `end` coordinates.
 */
export declare function Path({ start, end, ...props }: PathProps): React.JSX.Element;
export default Path;
//# sourceMappingURL=Path.d.ts.map