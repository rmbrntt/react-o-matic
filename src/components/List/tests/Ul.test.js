import React from 'react';

import Ul from '../Ul';

describe('<Ul />', () => {
  it('should render an <ul> tag', () => {
    const wrapper = shallow(<Ul />);
    expect(wrapper.type()).toEqual('ul');
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<Ul />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<Ul id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<Ul attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
