import React, { useState } from 'react';

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const countClickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={countClickHandler}>Count: {count}</button>
    </div>
  );
};
