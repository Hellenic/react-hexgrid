import Point from './Point';

class Orientation {
  constructor(f0, f1, f2, f3, b0, b1, b2, b3, startAngle) {
    this.f0 = f0;
    this.f1 = f1;
    this.f2 = f2;
    this.f3 = f3;
    this.b0 = b0;
    this.b1 = b1;
    this.b2 = b2;
    this.b3 = b3;
    this.startAngle = startAngle;
  }
}

class Layout {
  static LAYOUT_FLAT = new Orientation(3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0),2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0, 0.0);
  static LAYOUT_POINTY = new Orientation(Math.sqrt(3.0), Math.sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0, Math.sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0, 0.5);

  constructor(layout, origin) {
    this.name = layout.name || '';
    this.orientation = (layout.flat) ? Layout.LAYOUT_FLAT : Layout.LAYOUT_POINTY;
    this.size = new Point(layout.width, layout.height);
    this.origin = origin || new Point(0, 0);
    this.spacing = layout.spacing || 1;
  }

  getPointOffset(corner) {
    let angle = 2.0 * Math.PI * (corner + this.orientation.startAngle) / 6;
    return new Point(this.size.x * Math.cos(angle), this.size.y * Math.sin(angle));
  }

  getPolygonPoints(hex) {
    let corners = [];
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
