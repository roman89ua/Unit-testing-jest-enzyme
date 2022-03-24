import React from 'react';
import { Input } from './Input';
import { shallow, ShallowWrapper } from 'enzyme';
import { IInput } from './types';

describe('Input component', () => {
  const onPress = jest.fn();
  const onChangeInput = jest.fn();

  const mockProps: IInput = {
    onChange: onChangeInput,
    onKeyPress: onPress,
    placeholder: 'Search',
    value: 'value of input',
  };

  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Input {...mockProps} />);
  });

  it('should render Input component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call onClick method', () => {
    expect(onChangeInput.mock.calls.length).toBe(0);
    component.find('.input').simulate('change');
    expect(onChangeInput.mock.calls.length).toBe(1);
  });

  it('should call onKeyPress method', () => {
    expect(onPress.mock.calls.length).toBe(0);
    component.find('.input').simulate('keypress', { key: 'Enter' }).simulate('keypress', { key: 'Enter' });
    expect(onPress.mock.calls.length).toBe(2);
  });
});
