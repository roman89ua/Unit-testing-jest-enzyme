import React from 'react';
import { ClickCounter } from './ClickCounter';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';

describe('ClickCounter component rendering', () => {
  let componentWrapper: ShallowWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<ClickCounter />);
  });

  it('should render one button', () => {
    const button = componentWrapper?.find('button');
    expect(componentWrapper.exists('button')).toBe(true);
    expect(button).toHaveLength(1);
  });

  it('should render button with "Count: 0" text', () => {
    const button = componentWrapper?.find('button');
    expect(button.text()).toEqual('Count: 0');
  });
});

describe('ClickCounter useState hook test', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<ClickCounter />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render <ClickCounter /> component', () => {
    expect(wrapper).not.toBeNull();
  });

  it('should render button with "Count: 0" on load', () => {
    expect(wrapper.find('button').text()).toEqual('Count: 0');
  });

  it('should increase count "Count: 1" on button click', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(button.text()).toEqual('Count: 1');
  });

  it('should increase count to "Count: 3" on three times button clicks', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    expect(button.text()).toEqual('Count: 3');
  });
});
