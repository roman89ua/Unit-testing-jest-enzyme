import React from 'react';
import './styles.scss';

interface ITitle {
  title: string | null | undefined;
}

export const Title = ({ title }: ITitle) => {
  if (!title) {
    return null;
  }
  return (
    <div className="title">
      <div className="divider" />
      <h1 className="title-text">{title}</h1>
    </div>
  );
};
