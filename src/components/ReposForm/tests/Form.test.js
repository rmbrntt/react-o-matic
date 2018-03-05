import React from 'react';

import Form from '../Form';

describe('<Form />', () => {
  it('should render an <form> tag', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.type()).toEqual('form');
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<Form id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<Form attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
