import React from 'react';
import { render, ReactWrapper, ShallowWrapper, mount, shallow } from 'enzyme';
import { Title } from './Title';

describe('<Title /> component shalow rendering', () => {
  const APP_TITLE = 'App Title.';
  let container: ShallowWrapper;

  it('should render one header', () => {
    container = shallow(<Title title={APP_TITLE} />);
    const header = container?.find('.title-text');
    console.log(header);
    expect(header).toHaveLength(1);
  });
});

describe('<Title /> component full DOM rendering', () => {
  let container: ReactWrapper;

  afterEach(() => {
    container.unmount();
  });

  it('should not render any Title component', () => {
    container = mount(<Title title={undefined} />);
    expect(container?.find('.title').exists()).toBeFalsy;
  });
});
