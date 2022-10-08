import * as React from "react";
export declare type PathProps = {
    start: any;
    end?: any;
} & Omit<React.SVGProps<SVGPathElement>, "start" | "end">;
/**
 * Renders an svg `<path>` component with points on the grid between a qrs-based `start` and `end` coordinates.
 */
export declare function Path({ start, end, ...props }: PathProps): JSX.Element;
export default Path;
//# sourceMappingURL=Path.d.ts.map