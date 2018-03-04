import React from 'react';

import Section from '../Section';

describe('<Section />', () => {
  it('should render an <section> tag', () => {
    const wrapper = shallow(<Section />);
    expect(wrapper.type()).toEqual('section');
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<Section />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<Section id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<Section attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
