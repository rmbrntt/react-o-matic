import React from 'react';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render an <li> tag', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.type()).toEqual('li');
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<Wrapper id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<Wrapper attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
