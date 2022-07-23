export type HexCoordinates = {
  q: number
  r: number
  s: number
}

export function qrs(q: number, r: number, s: number): HexCoordinates {
  return { q, r, s }
}

export class Hex implements HexCoordinates {
  q: number
  r: number
  s: number

  constructor(q: number, r: number, s: number) {
    this.q = q
    this.r = r
    this.s = s
  }
}
export default Hex
