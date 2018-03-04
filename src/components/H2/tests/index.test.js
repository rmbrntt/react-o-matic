import React from 'react';

import H2 from '../index';

describe('<H2 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = shallow(<H2 id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = shallow(<H2>{children}</H2>);
    expect(wrapper.contains(children)).toBe(true);
  });
});
