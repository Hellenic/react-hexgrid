import Hex from './Hex'

class GridGenerator {

  static getGenerator(name) {
    if (GridGenerator.hasOwnProperty(name))
      return GridGenerator[name];

    return null;
  }

  static parallelogram(q1, q2, r1, r2) {
    let hexas = [];
    for (let q = q1; q <= q2; q++) {
      for (let r = r1; r <= r2; r++) {
        hexas.push(new Hex(q, r, -q-r));
      }
    }

    return hexas;
  }

  static triangle(mapSize) {
    let hexas = [];
    for (let q = 0; q <= mapSize; q++) {
      for (let r = 0; r <= mapSize - q; r++) {
        hexas.push(new Hex(q, r, -q-r));
      }
    }

    return hexas;
  }

  static hexagon(mapRadius) {
    let hexas = [];
    for (let q = -mapRadius; q <= mapRadius; q++) {
      let r1 = Math.max(-mapRadius, -q - mapRadius);
      let r2 = Math.min(mapRadius, -q + mapRadius);
      for (let r = r1; r <= r2; r++) {
        hexas.push(new Hex(q, r, -q-r));
      }
    }

    return hexas;
  }

  static rectangle(mapWidth, mapHeight) {
    let hexas = [];
    for (let r = 0; r < mapHeight; r++) {
      let offset = Math.floor(r/2); // or r>>1
      for (let q = -offset; q < mapWidth - offset; q++) {
        hexas.push(new Hex(q, r, -q-r));
      }
    }

    return hexas;
  }

  static orientedRectangle(mapWidth, mapHeight) {
    let hexas = [];
    for (let q = 0; q < mapWidth; q++) {
      let offset = Math.floor(q/2); // or q>>1
      for (let r = -offset; r < mapHeight - offset; r++) {
        hexas.push(new Hex(q, r, -q-r));
      }
    }

    return hexas;
  }

}

export default GridGenerator;
