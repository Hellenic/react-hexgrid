import HexUtils from '../../src/HexUtils';

const hex1 = { q: 0, r: 0, s: 0 };
const hex2 = { q: 0, r: -2, s: 2 };

const layout = {
  spacing: 6.0,
  orientation: {
    f0: 3.0 / 2.0,
    f1: 0.0,
    f2: Math.sqrt(3.0) / 2.0,
    f3: Math.sqrt(3.0),
    b0: 2.0 / 3.0,
    b1: 0.0,
    b2: -1.0 / 3.0,
    b3: Math.sqrt(3.0) / 3.0,
    startAngle: 0.0,
  },
  size: {
    x: 10,
    y: 10,
  },
  origin: {
    x: 0,
    y: 0,
  },
};

test('HexUtils.equals should work', () => {
  expect(HexUtils.equals(hex1, hex1)).toBe(true);
  expect(HexUtils.equals(hex1, hex2)).toBe(false);
});

test('HexUtils.add should work', () => {
  expect(HexUtils.add(hex1, hex2)).toEqual({ q: 0, r: -2, s: 2 });
});

test('HexUtils.subtract should work', () => {
  expect(HexUtils.subtract(hex1, hex2)).toEqual({ q: 0, r: 2, s: -2 });
});

test('HexUtils.multiply should work', () => {
  expect(HexUtils.multiply(hex1, 3)).toEqual({ q: 0, r: 0, s: 0 });
});

test('HexUtils.lengths should work', () => {
  expect(HexUtils.lengths(hex2)).toBe(2);
});

test('HexUtils.distance should work', () => {
  expect(HexUtils.distance(hex1, hex2)).toBe(2);
});

test('HexUtils.direction should work', () => {
  expect(HexUtils.direction(0)).toEqual({ q: 1, r: 0, s: -1 });
});

test('HexUtils.neighbour should work', () => {
  expect(HexUtils.neighbour(hex1, 1)).toEqual({ q: 1, r: -1, s: 0 });
});

test('HexUtils.neighbours should work', () => {
  expect(HexUtils.neighbours(hex1)).toEqual([
    { q: 1, r: 0, s: -1 },
    { q: 1, r: -1, s: 0 },
    { q: 0, r: -1, s: 1 },
    { q: -1, r: 0, s: 1 },
    { q: -1, r: 1, s: 0 },
    { q: 0, r: 1, s: -1 },
  ]);
});

test('HexUtils.round should work when qDiff > rDiff && qDiff > sDiff', () => {
  expect(HexUtils.round({ q: 1.5, r: 0.3, s: 0.1 })).toEqual({ q: -0, r: 0, s: 0 });
});

test('when qDiff !> rDiff || qDiff !> sDiff && rDiff > sDiff', () => {
  expect(HexUtils.round({ q: 0.123, r: -2.456, s: 2.789 })).toEqual({ q: 0, r: -3, s: 3 });
});

test('HexUtils.round should work when qDiff !> rDiff || qDiff !> sDiff && rDiff !> sDiff', () => {
  expect(HexUtils.round({ q: 1, r: 2, s: 3 })).toEqual({ q: 1, r: 2, s: -3 });
});

test('HexUtils.hexToPixel should work', () => {
  const pixel = HexUtils.hexToPixel(hex2, layout);
  expect(pixel).toEqual({ x: 0, y: -207.84609690826525 });
});

test('HexUtils.pixelToHex should work', () => {
  const hex = HexUtils.pixelToHex({ x: 0, y: -207.846 }, layout);
  expect(hex).toEqual({ q: 0, r: -12, s: 12 });
});

test('HexUtils.lerp should work', () => {
  expect(HexUtils.lerp(1, 2, 3)).toBe(4);
});

test('HexUtils.hexLerp should work', () => {
  expect(HexUtils.hexLerp(hex1, hex2, 2)).toEqual({ q: 0, r: -4, s: 4 });
});

test('HexUtils.getID should work', () => {
  expect(HexUtils.getID(hex2)).toBe('0,-2,2');
});
