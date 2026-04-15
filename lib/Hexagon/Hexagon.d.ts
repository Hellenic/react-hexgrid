import * as React from "react";
import { Hex } from "../models/Hex";
import { Point } from "../models/Point";
type H = {
    data?: any;
    state: {
        hex: Hex;
    };
    props: HexagonProps;
};
export type HexagonDragEventHandler<T = Element, AdditionalData = any> = (event: React.DragEvent<T>, h: H, additionalData?: AdditionalData) => void;
export type HexagonDragDropEventHandler<T = Element, AdditionalData = any> = (event: React.DragEvent<T>, h: H, additionalData: AdditionalData) => void;
export type HexagonMouseEventHandler<T = SVGGElement> = (event: React.MouseEvent<T, globalThis.MouseEvent>, h: H) => void;
export type HexagonProps = {
    /**
     * The q coordinate of the hexagon.
     */
    q: number;
    /**
     * The r coordinate of the hexagon.
     */
    r: number;
    /**
     * The s coordinate of the hexagon.
     */
    s: number;
    /**
     * The pattern id for the fill image of the hexagon
     */
    fill?: string;
    /**
     * Optional classname.  Usage unclear, currently not used.
     */
    className?: string;
    /**
     * The circumradius (from origin to vertex) of the hexagon.  Defaults to 10.
     */
    radius?: number;
    /**
     * CSSProperties for the hexagon.  cellStyle is deprecated and only remains to avoid breaking changes
     */
    cellStyle?: React.CSSProperties | undefined;
    style?: React.CSSProperties | undefined;
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
type TargetProps = {
    hex: Hex;
    pixel: Point;
    data?: any;
    fill?: string;
    className?: string;
};
/**
 * Renders a Hexagon cell at the given qrs-based coordinates.
 */
export declare function Hexagon(props: HexagonProps & Omit<React.SVGProps<SVGGElement>, "transform" | "onDragStart" | "onDragEnd" | "onDrop" | "onDragOver" | "onMouseEnter" | "onClick" | "onMouseOver" | "onMouseLeave">): React.JSX.Element;
export default Hexagon;
//# sourceMappingURL=Hexagon.d.ts.map