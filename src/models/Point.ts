export type Coordinates = {
  x: number
  y: number
}

export function xy(x: number, y: number): Coordinates {
  return { x, y }
}

export class Point implements Coordinates {
  public x: number
  public y: number
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

export default Point
