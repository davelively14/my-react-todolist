import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('App renders without crashing', () => {
  // Shallow renders the current node and returns a shallow wrapper around it.
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});
