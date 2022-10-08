export interface HexCoordinates {
    q: number;
    r: number;
    s: number;
}
declare type HexPropsType = {
    fill: string;
    className: string;
};
interface HexAttributes {
    blocked: boolean;
    text: string;
    image: string;
    props: Partial<HexPropsType>;
    state: any;
    pattern: string;
}
export declare class Hex implements HexCoordinates, Partial<HexAttributes> {
    q: number;
    r: number;
    s: number;
    blocked?: boolean;
    text?: string;
    image?: string;
    props?: Partial<HexPropsType>;
    state?: any;
    pattern?: string;
    constructor(q: number, r: number, s: number);
}
export default Hex;
//# sourceMappingURL=Hex.d.ts.map