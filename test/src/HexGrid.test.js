import React from 'react';
import renderer from 'react-test-renderer';

import HexGrid from '../../src/HexGrid';

test('HexGrid should render correctly with default props', () => {
  const tree = renderer.create(
    <HexGrid>
      <div>child</div>
    </HexGrid>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('HexGrid should render correctly with custom props', () => {
  const tree = renderer.create(
    <HexGrid
      width={888}
      height={666}
      viewBox={'-150 -150 1100 1100'}
    >
      <div>child</div>
    </HexGrid>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('HexGrid should accept percentage in width and height', () => {
  const tree = renderer.create(
    <HexGrid
      width={'100%'}
      height={'50%'}
    >
      <div>child</div>
    </HexGrid>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
