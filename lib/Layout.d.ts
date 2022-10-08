import * as React from "react";
import { Orientation } from "./models/Orientation";
import { Point } from "./models/Point";
export declare type Size = {
    x: number;
    y: number;
};
export declare type LayoutDimension = {
    size: Size;
    orientation: Orientation;
    origin: Size;
    spacing: number;
};
export declare type LayoutContextProps = {
    layout: LayoutDimension;
    points: string;
};
export declare function useLayoutContext(): LayoutContextProps;
/**
 * Calculates the points for a hexagon given the size, angle, and center
 * @param circumradius Radius of the Hexagon
 * @param angle Angle offset for the hexagon in radians
 * @param center Central point for the heaxagon
 * @returns Array of 6 points
 */
export declare function calculateCoordinates(circumradius: number, angle?: number, center?: Point, rings?: number): Point[];
export declare type LayoutProps = {
    children: React.ReactElement | React.ReactElement[] | JSX.Element | JSX.Element[];
    className?: string;
    flat?: boolean;
    origin?: any;
    size?: Size;
    space?: number;
    spacing?: number;
};
/**
 * Provides LayoutContext for all descendands and renders child elements inside a <g> (Group) element
 */
export declare function Layout({ size, flat, spacing, origin, children, className, ...rest }: LayoutProps): JSX.Element;
export default Layout;
//# sourceMappingURL=Layout.d.ts.map