import React from 'react';

import {Route} from 'react-router-dom';

import Header from 'components/Header';
import App from './App';

describe('<App />', () => {
  it('should render the header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should render some routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Route).length).not.toBe(0);
  });
});
