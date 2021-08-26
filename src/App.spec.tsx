import React, { Component } from 'react';
import { App } from './App';
import { ShallowWrapper, shallow } from 'enzyme';

describe('<App /> component rendering', () => {
  let container: ShallowWrapper<any, Readonly<any>, Component<any>>;

  beforeEach(() => {
    container = shallow(<App />);
  });
  it('should render one header', () => {
    const header = container?.find('h1');
    expect(header).toHaveLength(1);
  });
});
