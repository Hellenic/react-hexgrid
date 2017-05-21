import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../../src/Layout';

test('Layout should render correctly with default props', () => {
  const tree = renderer.create(
    <Layout
      className={'test1'}
    >
      <div>child</div>
    </Layout>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Layout should render correctly with custom props', () => {
  const tree = renderer.create(
    <Layout
      className={'test2'}
      flat={false}
      origin={{ x: 2, y: 4 }}
      size={{ x: 12, y: 14 }}
      spacing={2.0}
    >
      <div>child</div>
    </Layout>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
