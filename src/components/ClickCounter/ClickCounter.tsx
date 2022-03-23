import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const countClickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button onClick={countClickHandler}>Count: {count}</Button>
    </div>
  );
};
