import React from 'react';
import renderer from 'react-test-renderer';

import Pattern from '../../src/Pattern';

test('Pattern should render correctly with default props', () => {
  const tree = renderer.create(
    <Pattern
      id={'test1'}
      link={'http://example.com'}
      size={{ x: 100, y: 200 }}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Pattern should render correctly with custom props', () => {
  const tree = renderer.create(
    <Pattern
      id={'test2'}
      link={'http://example.com'}
      size={{ x: 200, y: 100 }}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
