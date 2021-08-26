import React, { Component } from 'react';
import { ClickCounter } from './ClickCounter';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<ClickCounter /> component rendering', () => {
  let component: ShallowWrapper<any, Readonly<any>, Component<any>>;

  beforeEach(() => {
    component = shallow(<ClickCounter />);
  });

  afterEach(() => {
    component = shallow(<ClickCounter />);
  });

  it('should render one button', () => {
    const button = component?.find('button');
    expect(button).toHaveLength(1);
    expect(component.exists('button')).toBe(true);
  });

  // it('should on button click lunch countClickHandler and increase the state', () => {
  //
  // });
});
