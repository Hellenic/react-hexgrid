export interface HexCoordinates {
  q: number
  r: number
  s: number
}
type HexPropsType = {
  fill: string
  className: string
}
interface HexAttributes {
  blocked: boolean
  text: string
  image: string
  props: Partial<HexPropsType>
  state: any
  pattern: string
}
export class Hex implements HexCoordinates, Partial<HexAttributes> {
  q: number
  r: number
  s: number

  blocked?: boolean
  text?: string
  image?: string
  props?: Partial<HexPropsType>
  state?: any
  pattern?: string

  constructor(q: number, r: number, s: number) {
    this.q = q
    this.r = r
    this.s = s
  }
}
export default Hex
