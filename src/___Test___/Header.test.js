import React from 'react';
import Renderer from 'react-test-renderer';
import Header from '../navigation/Header';

// test Header component
it('renders correctly', () => {
  const tree = Renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
