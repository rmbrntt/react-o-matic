import React from 'react';

import AtPrefix from '../AtPrefix';

describe('<AtPrefix />', () => {
  it('should render an <span> tag', () => {
    const wrapper = shallow(<AtPrefix />);
    expect(wrapper.type()).toEqual('span');
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<AtPrefix />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<AtPrefix id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<AtPrefix attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
