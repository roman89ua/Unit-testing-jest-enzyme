import React from 'react';
import { PostList } from './PostList';
import { render, shallow } from 'enzyme';

describe('Post list component', () => {
  it('should render PostList match rendered snapshot', () => {
    const component = render(<PostList />);
    expect(component).toMatchSnapshot();
  });

  it('should render PostList match shallow snapshot', () => {
    const component = shallow(<PostList />);
    expect(component).toMatchSnapshot();
  });
});
