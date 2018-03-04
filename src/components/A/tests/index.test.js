/**
 * Testing our link component
 */

import React from 'react';

import A from '../index';

const href = 'http://rmbrntt.com/';
const children = <h1>Test</h1>;
const renderComponent = (props = {}) =>
  shallow(
    <A href={href} {...props}>
      {children}
    </A>,
  );

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const wrapper = renderComponent();
    expect(wrapper.type()).toEqual('a');
  });

  it('should have an href attribute', () => {
    const wrapper = renderComponent();
    expect(wrapper.prop('href')).toEqual(href);
  });

  it('should have children', () => {
    const wrapper = renderComponent();
    expect(wrapper.contains(children)).toEqual(true);
  });

  it('should have a className attribute', () => {
    const className = 'test';
    const wrapper = renderComponent({className});
    expect(wrapper.find('a').hasClass(className)).toEqual(true);
  });

  it('should adopt a target attribute', () => {
    const target = '_blank';
    const wrapper = renderComponent({target});
    expect(wrapper.prop('target')).toEqual(target);
  });

  it('should adopt a type attribute', () => {
    const type = 'text/html';
    const wrapper = renderComponent({type});
    expect(wrapper.prop('type')).toEqual(type);
  });
});
