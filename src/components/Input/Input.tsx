import React from 'react';
import { IInput } from './types';

export const Input = ({ onChange, onKeyPress, value, placeholder }: IInput) => {
  return (
    <div className="inputWrapper">
      <i className="fas fa-search" />
      <input
        className="input"
        placeholder={placeholder || ''}
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
      />
    </div>
  );
};
