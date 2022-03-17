import React from 'react';
import './styles.scss';
import REACT_LOGO from './React-logo.png';
import REACT_LOGO_SVG from './react-logo.svg';
import { ClickCounter } from './ClickCounter';
import { PostList } from './PostList';

export const App = () => {
  const a = '100';
  const isDevEnv = process.env.NODE_ENV === 'development';
  return (
    <div className="centered">
      <h1>
        EDITED react & typescript & webpack - {process.env.NODE_ENV} {process.env.name} {a}
      </h1>
      <img
        src={isDevEnv ? REACT_LOGO : REACT_LOGO_SVG}
        alt={isDevEnv ? 'React logo' : 'React logo svg'}
        width="50%"
        height="50%"
      />
      <ClickCounter />
      <PostList />
    </div>
  );
};
