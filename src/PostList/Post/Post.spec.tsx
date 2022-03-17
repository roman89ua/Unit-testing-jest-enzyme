import React from 'react';
import { Post } from './Post';
import { shallow, ShallowWrapper } from 'enzyme';
import { IPost } from './IPost';

const setUp = (props: IPost) => shallow(<Post {...props} />);

describe('should render Post component', () => {
  let component: ShallowWrapper;

  const postData: IPost = {
    author: 'Roman Kostiuk',
    created_at: undefined,
    num_comments: 1,
    title: 'Post Title',
    points: 0,
    url: 'some/link',
  };

  beforeEach(() => {
    component = setUp(postData);
  });

  afterEach(() => {
    component.unmount();
  });

  it('should contain .post wrapper', () => {
    const wrapper = component?.find('.post');
    expect(wrapper.length).toBe(1);
  });

  it('should contain link', () => {
    const wrapper = component?.find('a');
    expect(wrapper.length).toBe(1);
  });

  it('should render created date', () => {
    const createdAt = { created_at: '01-03-2020' };
    component = setUp({ ...postData, ...createdAt });
    const date = component?.find('.date');
    expect(date.text()).toBe(new Date(createdAt.created_at).toLocaleDateString());
  });

  it('should render one title', () => {
    const title = component?.find('.title');
    expect(title.length).toBe(1);
  });

  it('title should be a link', () => {
    const link = { url: 'some/new/link' };
    component = setUp({ ...postData, ...link });
    const anchor = component?.find('a');
    expect(anchor.props().href).toEqual(link.url);
  });
});
