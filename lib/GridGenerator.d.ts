import { Hex } from "./models/Hex";
declare type Generator = (args: any) => Hex[];
/** This class contains static methods for generating Hex coordinates
 * for specifically-shaped grids, such as rectangle, hexagon, and more. */
export declare class GridGenerator {
    /** This method is used to dynamically choose a type of grid to
     * generate.
     */
    static getGenerator(name: "ring" | "spiral" | "parallelogram" | "triangle" | "hexagon" | "rectangle" | "orientedRectangle"): Generator;
    /** May not be working. There are no tests for it. */
    static ring(center: Hex, mapRadius: number): Hex[];
    /** May not be working. There are no tests for it. */
    static spiral(center: Hex, mapRadius: number): Hex[];
    /** Returns an array of Hex coordinates needed to create a
     * parallelogram grid */
    static parallelogram(q1: number, q2: number, r1: number, r2: number): Hex[];
    /** Returns an array of Hex coordinates needed to create a
     * triangle grid
     */
    static triangle(mapSize: number): Hex[];
    /** Returns an array of Hex coordinates needed to create a
     * Hexagon grid */
    static hexagon(mapRadius: number): Hex[];
    /** Returns an array of Hex coordinates needed to create
     * a diagonal rectangle grid */
    static rectangle(mapWidth: number, mapHeight: number): Hex[];
    /** Returns an array of Hex coordinates needed to create a vertical
     * and horizontal rectangle.
     */
    static orientedRectangle(mapWidth: number, mapHeight: number): Hex[];
}
export default GridGenerator;
//# sourceMappingURL=GridGenerator.d.ts.map