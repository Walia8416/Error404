import React from 'react';
import renderder from 'react-test-renderer';
import Cart from '../cart';

test('renders correctly', () => {
  const tree = renderder.create(<Cart />).toJSON();
  expect(tree).toMatchSnapshot();
});
