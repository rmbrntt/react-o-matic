import React from 'react';

import CenteredSection from '../CenteredSection';

describe('<CenteredSection />', () => {
  it('should render an <section> tag', () => {
    const wrapper = shallow(<CenteredSection />);
    expect(wrapper.type()).toEqual('section');
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<CenteredSection />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<CenteredSection id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<CenteredSection attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
