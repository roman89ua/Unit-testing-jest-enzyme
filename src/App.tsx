import React from 'react';
import './styles.scss';
import REACT_LOGO from './React-logo.png';
import REACT_LOGO_SVG from './react-logo.svg';

export const App = () => {
    return (
        <div className="centered">
            <h1>React typescript webpack</h1>
            <img src={REACT_LOGO} alt="React logo" width="50%" height="50%"/>.
            <img src={REACT_LOGO_SVG} alt="React logo svg" width="50%" height="50%"/>.
        </div>
    )
}
