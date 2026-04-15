import * as React from "react";
export type TextProps = {
    children: string | React.ReactNode | React.ReactNode[];
    x?: string | number;
    y?: string | number;
    className?: string;
} & React.SVGProps<SVGTextElement>;
export declare function Text(props: TextProps): React.JSX.Element;
export default Text;
//# sourceMappingURL=Text.d.ts.map