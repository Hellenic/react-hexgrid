export class Hex {
  public q: number
  public r: number
  public s: number

  public blocked?: boolean
  public text?: string | undefined
  public image?: string | undefined
  public props?: { fill?: string; className?: string }
  public state?: any
  public pattern?: string

  constructor(q: number, r: number, s: number) {
    this.q = q
    this.r = r
    this.s = s
  }
}

export default Hex
