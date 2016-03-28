import HexUtils from './HexUtils';
import Orientation from './Orientation';
import Point from './Point';

class Layout {
  static LAYOUT_FLAT = new Orientation(3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0),2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0, 0.0);
  static LAYOUT_POINTY = new Orientation(Math.sqrt(3.0), Math.sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0, Math.sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0, 0.5);

  constructor(sizeW, sizeH, flat, origin) {
    this.orientation = (flat) ? Layout.LAYOUT_FLAT : Layout.LAYOUT_POINTY;
    this.size = new Point(sizeW, sizeH);
    this.origin = origin || new Point(0, 0);
  }

  getPointOffset(corner) {
    let angle = 2.0 * Math.PI * (corner + this.orientation.startAngle) / 6;
    return new Point(this.size.x * Math.cos(angle), this.size.y * Math.sin(angle));
  }

  getPolygonPoints(hex) {
    let corners = [];
    // let center = HexUtils.hexToPixel(hex, this);
    let center = new Point(0, 0);

    Array.from(new Array(6), (x, i) => {
      let offset = this.getPointOffset(i);
      let point = new Point(center.x + offset.x, center.y + offset.y);
      corners.push(point);
    });

    return corners;
  }
}

export default Layout;
