import React from 'react';
import './styles.scss';

interface ITitle {
  title: string | null | undefined;
  classN?: string;
}

export const Title = ({ title, classN }: ITitle) => {
  if (!title) {
    return null;
  }
  return (
    <div className={`title ${classN || ''}`}>
      <div className="divider" />
      <h1 className="title-text">{title}</h1>
    </div>
  );
};
