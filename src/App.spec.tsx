import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { App } from './App';

describe('<App /> component rendering', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<App />);
  });

  it('should render one header', () => {
    const header = container?.find('h1');
    expect(header).toHaveLength(1);
  });
});
