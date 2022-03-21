import React from 'react';
import './styles.scss';
import { ISelect } from './types';

export const Select = ({ handleChange, options, defaultValue }: ISelect) => (
  <div className="select">
    {Array.isArray(options) && options?.length > 0 ? (
      <>
        <select onChange={handleChange} defaultValue={defaultValue}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <span className="select__text">per page</span>
      </>
    ) : (
      <div className="select__placeholder">"No items"</div>
    )}
  </div>
);
