import { LayoutDimension } from "./Layout";
import { Hex, HexCoordinates } from "./models/Hex";
import { Point } from "./models/Point";
/** A class which contains static methods which are useful for working with Hexes */
export declare class HexUtils {
    static DIRECTIONS: Hex[];
    /**
     * Checks if coordinates are the same.
     * @param {HexCoordinates} a - first set of coordinates
     * @param {HexCoordinates} b - second set of coordinates
     * @returns {boolean} - true if all coords are the same, false otherwise
     */
    static equals(a: HexCoordinates, b: HexCoordinates): boolean;
    /**
     * Returns a new Hex with the addition of q,r,s values from A and B respectively
     * @param {HexCoordinates} a - first set of coordinates
     * @param {HexCoordinates} b - second set of coordinates
     * @returns {Hex} - new hex at the position of the sum of the coords
     */
    static add(a: HexCoordinates, b: HexCoordinates): Hex;
    /**
     * Returns a new Hex with the subtraction of q,r,s values from A and B respectively
     * @param {HexCoordinates} a - first set of coordinates
     * @param {HexCoordinates} b - second set of coordinates
     * @returns {Hex} - new hex at the position of the difference between a and b
     */
    static subtract(a: HexCoordinates, b: HexCoordinates): Hex;
    /**
     * @param {HexCoordinates} a - first set of coordinates
     * @param {HexCoordinates} k - second set of coordinates
     * @returns {Hex} new hex at the position of the product between a's coordinates and a constant k
     */
    static multiply(a: HexCoordinates, k: number): Hex;
    /**
     * @param {Hex} hex - target hex
     * @returns {number} manhattan distance between hex and origin
     */
    static lengths(hex: Hex): number;
    /**
     * Returns the distance between two hex coordinates
     * @param {HexCoordinates} a - first set of coordinates
     * @param {HexCoordinates} b - second set of coordinates
     * @returns {number} the manhattan distance between a and b
     */
    static distance(a: HexCoordinates, b: HexCoordinates): number;
    /**
     * Returns a Hex whos coordinates represent the delta needed to move
     * in the given direction
     * @param {number} direction - number representing the direction
     * @returns {Hex}
     */
    static direction(direction: number): Hex;
    /**
     * Returns a Hex which is in the given direction.
     * @param {Hex} hex - starting hex
     * @param {number} direction - number representing the direction
     * @returns {Hex} Hex which is adjacent in the given direction
     */
    static neighbor(hex: Hex, direction: number): Hex;
    /** Returns an array of all the direct neighbors of a Hex within one Hex away
     * @param {Hex} hex - starting hex
     * @returns {Hex[]} array containing all adjacent Hexes
     */
    static neighbors(hex: Hex): Hex[];
    /**
     * rounds the axial coordinate values of a Hex trying to maintain the
     * smallest difference from the current coordinate values.
     * @param {Hex} hex - the hexagon which needs its coordinates rounded
     * @return {Hex} - a Hex which contains the rounded coordinates
     */
    static round(hex: Hex): Hex;
    /** Given the q,r,s of a hexagon return the x and y pixel coordinates of the
     * hexagon center.
     * @param {Hex} hex - target Hex
     * @param {LayoutDimensions} layout - layout which contains the Hex
     * @returns {Point} pixel coordinate of the Hex center
     */
    static hexToPixel(hex: Hex, layout: LayoutDimension): Point;
    /** Return the q,r,s coordinate of the hexagon given pixel point x and y.
     * @param {Point} point - target pixel coordinates
     * @param {LayoutDimension} layout - layout of the desired
     * @returns {Hex} Hex with coordinate position at the
     */
    static pixelToHex(point: Point, layout: LayoutDimension): Hex;
    /** Returns a value that is blended between a and b.
     * For more Information:
     * {@link https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support Linear Interpolation Wiki}
     * @param {number} a - left hand value
     * @param {number} b - right hand value
     * @param {number} t - alpha blending value (how much of a or b to be used)
     * @returns {number} a value between a and b based on t
     */
    static lerp(a: number, b: number, t: number): number;
    /** Calculates the linear interpolation of each Hex coordinate and
     * returns a Hex with the linear interpolated coordiantes.
     * For more Information:
     * {@link https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support Linear Interpolation Wiki}
     * @param {HexCoordinates} a - left hand hex
     * @param {HexCoordinates} b - right hand hex
     * @param {number} t - alpha blending value
     * @returns {Hex} new Hex which is between the two Hexes
     */
    static hexLerp(a: HexCoordinates, b: HexCoordinates, t: number): Hex;
    /** Return a string ID from Hex Coordinates.
     * Example: Hex Coordinates of {q: 1, r: 2, s: 3} is returned
     * as string "1,2,3"
     * @param {HexCoordinates} hex - target Hex
     * @returns {string} an ID string in the form `{q},{r},{s}`
     */
    static getID(hex: HexCoordinates): string;
    /** Sort function for Hex Coordinates. Sorts by q, then r, then s.
     * For use with Array.prototype.sort();
     * @param {HexCoordinates} a - left hand Hex
     * @param {HexCoordinates} b - right hand Hex
     * @returns {number} -1 if a is less than b, 1 if a is greater than b, 0 if equal
     */
    static sort(a: HexCoordinates, b: HexCoordinates): number;
}
export default HexUtils;
//# sourceMappingURL=HexUtils.d.ts.map