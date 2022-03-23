import React from 'react';
import { ReactWrapper, ShallowWrapper, mount, shallow } from 'enzyme';
import { Title } from './Title';

describe('<Title /> component shalow rendering', () => {
  const APP_TITLE = 'App Title.';
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<Title title={APP_TITLE} />);
  });

  it('should render one header', () => {
    const header = container?.find('.title-text');
    expect(header).toHaveLength(1);
  });

  it(`should render ${APP_TITLE} text`, () => {
    expect(container).toMatchSnapshot();
  });
});

describe('<Title /> component full DOM rendering', () => {
  let container: ReactWrapper;

  afterEach(() => {
    container.unmount();
  });

  it('should not render any Title component', () => {
    container = mount(<Title title={undefined} />);
    expect(container?.find('.title').exists()).toBeFalsy();
  });
});
