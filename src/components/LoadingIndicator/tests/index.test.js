import React from 'react';
import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should render 13 divs', () => {
    const wrapper = mount(<LoadingIndicator />);
    expect(wrapper.find('div').length).toBe(13);
  });
});
