import React from 'react';

import A from '../A';

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const wrapper = shallow(<A />);
    expect(wrapper.type()).toEqual('a');
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<A />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<A id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<A attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
