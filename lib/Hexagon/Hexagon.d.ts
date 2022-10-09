import * as React from "react";
import { Hex } from "../models/Hex";
import { Point } from "../models/Point";
declare type H = {
    data?: any;
    state: {
        hex: Hex;
    };
    props: HexagonProps;
};
export declare type HexagonDragEventHandler<T = Element, AdditionalData = any> = (event: React.DragEvent<T>, h: H, additionalData?: AdditionalData) => void;
export declare type HexagonDragDropEventHandler<T = Element, AdditionalData = any> = (event: React.DragEvent<T>, h: H, additionalData: AdditionalData) => void;
export declare type HexagonMouseEventHandler<T = SVGGElement> = (event: React.MouseEvent<T, globalThis.MouseEvent>, h: H) => void;
export declare type HexagonProps = {
    q: number;
    r: number;
    s: number;
    rings?: number;
    fill?: string;
    fillUrl?: string;
    className?: string;
    cellStyle?: React.CSSProperties | undefined;
    data?: any;
    onMouseEnter?: HexagonMouseEventHandler;
    onMouseLeave?: HexagonMouseEventHandler;
    onClick?: HexagonMouseEventHandler;
    onDragStart?: HexagonDragEventHandler;
    onDragEnd?: HexagonDragEventHandler;
    onDragOver?: HexagonDragEventHandler;
    onDrop?: HexagonDragDropEventHandler<any, TargetProps>;
    onMouseOver?: HexagonMouseEventHandler;
    children?: React.ReactNode | React.ReactNode[];
};
declare type TargetProps = {
    hex: Hex;
    pixel: Point;
    data?: any;
    fill?: string;
    fillUrl?: string;
    className?: string;
};
/**
 * Renders a Hexagon cell at the given rqs-based coordinates.
 */
export declare function Hexagon(props: HexagonProps & Omit<React.SVGProps<SVGGElement>, "transform" | "onDragStart" | "onDragEnd" | "onDrop" | "onDragOver" | "onMouseEnter" | "onClick" | "onMouseOver" | "onMouseLeave">): JSX.Element;
export default Hexagon;
//# sourceMappingURL=Hexagon.d.ts.map