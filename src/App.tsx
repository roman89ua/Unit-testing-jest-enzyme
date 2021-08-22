import React from 'react';
import './styles.scss';
import REACT_LOGO from './React-logo.png';
import REACT_LOGO_SVG from './react-logo.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  return (
    <div className="centered">
      <h1>
        EDITED react & typescript & webpack - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={REACT_LOGO} alt="React logo" width="50%" height="50%" />.
      <img src={REACT_LOGO_SVG} alt="React logo svg" width="50%" height="50%" />.
      <ClickCounter />
    </div>
  );
};
