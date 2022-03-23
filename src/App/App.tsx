import React from 'react';
import REACT_LOGO from '../images/React-logo.png';
import REACT_LOGO_SVG from '../images/react-logo.svg';
import { ClickCounter } from 'components/ClickCounter';
import { PostList } from 'components/PostList';
import { Title } from 'components/Title';
// import { Select } from 'components/Select';
import './styles.scss';

export const App = () => {
  const a = '100';
  const isDevEnv = process.env.NODE_ENV === 'development';
  // const selectDataOptions = [
  //   {
  //     label: 'All',
  //     value: 0,
  //   },
  //   {
  //     label: 'One',
  //     value: 1,
  //   },
  //   {
  //     label: 'Two',
  //     value: 2,
  //   },
  //   {
  //     label: 'Three',
  //     value: 3,
  //   },
  //   {
  //     label: 'Four',
  //     value: 4,
  //   },
  // ];

  return (
    <div className="container">
      <Title title={`EDITED react & typescript & webpack - ${process.env.NODE_ENV} ${process.env.name} ${a}`} />
      <img
        src={isDevEnv ? REACT_LOGO : REACT_LOGO_SVG}
        alt={isDevEnv ? 'React logo' : 'React logo svg'}
        width="50%"
        height="50%"
      />
      <ClickCounter />
      <PostList />
      {/* <Select handleChange={() => {}} options={selectDataOptions} defaultValue={selectDataOptions[0].value} /> */}
    </div>
  );
};
