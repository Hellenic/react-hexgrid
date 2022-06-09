export class Orientation {
  public f0: number
  public f1: number
  public f2: number
  public f3: number
  public b0: number
  public b1: number
  public b2: number
  public b3: number
  public startAngle: number

  constructor(
    f0: number,
    f1: number,
    f2: number,
    f3: number,
    b0: number,
    b1: number,
    b2: number,
    b3: number,
    startAngle: number,
  ) {
    this.f0 = f0
    this.f1 = f1
    this.f2 = f2
    this.f3 = f3
    this.b0 = b0
    this.b1 = b1
    this.b2 = b2
    this.b3 = b3
    this.startAngle = startAngle
  }
}

export default Orientation
