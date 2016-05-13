import Hex from './Hex';
import Point from './Point';

class HexUtils {

  static DIRECTIONS = [
    new Hex(1, 0, -1), new Hex(1, -1, 0), new Hex(0, -1, 1),
    new Hex(-1, 0, 1), new Hex(-1, 1, 0), new Hex(0, 1, -1)
  ];

  static equals(a, b) {
    return a.q == b.q && a.r == b.r && a.s == b.s;
  }

  static add(a, b) {
    return new Hex(a.q + b.q, a.r + b.r, a.s + b.s);
  }

  static subtract(a, b) {
    return new Hex(a.q - b.q, a.r - b.r, a.s - b.s);
  }

  static multiply(a, k) {
    return new Hex(a.q * k, a.r * k, a.s * k);
  }

  static lengths(hex) {
    return parseInt((Math.abs(hex.q) + Math.abs(hex.r) + Math.abs(hex.s)) / 2);
  }

  static distance(a, b) {
    return HexUtils.lengths(HexUtils.subtract(a, b));
  }

  static direction(direction) {
    return HexUtils.DIRECTIONS[(6 + (direction % 6)) % 6];
  }
  static neighbour(hex, direction) {
    return HexUtils.add(hex, HexUtils.direction(direction));
  }

  static round(hex) {
    var rq = Math.round(hex.q)
    var rr = Math.round(hex.r)
    var rs = Math.round(hex.s)

    var qDiff = Math.abs(rq - hex.q)
    var rDiff = Math.abs(rr - hex.r)
    var sDiff = Math.abs(rs - hex.s)

    if (qDiff > rDiff && qDiff > rDiff)
        rq = -rr-rs
    else if (rDiff > sDiff)
        rr = -rq-rs
    else
        rs = -rq-rr

    return new Hex(rq, rr, rs);
  }

  static hexToPixel(hex, layout) {
    let s = layout.spacing;
    let M = layout.orientation;
    let x = (M.f0 * hex.q + M.f1 * hex.r) * layout.size.x;
    let y = (M.f2 * hex.q + M.f3 * hex.r) * layout.size.y;
    // Apply spacing
    x = x * s;
    y = y * s;
    return new Point(x + layout.origin.x, y + layout.origin.y);
  }

  static pixelToHex(point, layout) {
    let M = layout.orientation;
    let pt = new Point((point.x - layout.origin.x) / layout.size.x, (point.y - layout.origin.y) / layout.size.y);
    let q = M.b0 * pt.x + M.b1 * pt.y;
    let r = M.b2 * pt.x + M.b3 * pt.y;
    return new Hex(q, r, -q - r);
  }

  static lerp(a, b, t) {
    return new Hex(a.q + (b.q - a.q) * t, a.r + (b.r - a.r) * t, a.s + (b.s - a.s) * t);
  }

  static getID(hex) {
    return `${hex.q},${hex.r},${hex.s}`;
  }
}

export default HexUtils;
