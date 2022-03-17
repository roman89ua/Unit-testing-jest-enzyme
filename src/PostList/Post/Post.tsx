import React from 'react';
import { IPost } from './IPost';

export const Post = ({ author, created_at, num_comments, title, points, url }: IPost) => (
  <li className="post">
    <div className="description">
      <a href={url} className="title">
        {title}
      </a>
      <span className="text">{`${points} points`}</span>
      <span className="comments">{`${num_comments} comments`}</span>
      <span className="date">{created_at ? new Date(created_at).toLocaleDateString() : 'No date'}</span>
      <span className="author">{author}</span>
    </div>
  </li>
);
