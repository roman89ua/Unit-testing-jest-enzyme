import React, { Fragment } from 'react';
import { Post } from './Post';
import { IPost } from './Post/IPost';

export const PostList = () => {
  const postsData: IPost[] = [
    {
      author: 'Roman',
      created_at: '2020-05-03T23:36:09.816Z',
      num_comments: 10,
      title: 'Jest & Enzyme',
      points: 100,
      url: '//test.url',
    },
    {
      author: 'Robert',
      created_at: '2020-05-05T23:36:09.816Z',
      num_comments: 8,
      title: 'TypeScript Basics',
      points: 10,
      url: '//test2121.url',
    },
    {
      author: 'Kiril',
      created_at: '2020-05-05T23:36:09.816Z',
      num_comments: 87,
      title: 'Java Script',
      points: 25,
      url: '//test3333.url',
    },
  ];

  return (
    <ul>
      {postsData.map((post: IPost) => (
        <Post {...post} key={`${post.title} ${post.url}`} />
      ))}
    </ul>
  );
};
