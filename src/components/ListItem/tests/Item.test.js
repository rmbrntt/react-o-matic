import React from 'react';

import Item from '../Item';

describe('<Item />', () => {
  it('should render an <div> tag', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<Item id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<Item attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
