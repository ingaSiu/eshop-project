'use client';

import { Minus, Plus } from 'lucide-react';

import { Button } from './ui/button';
import { useState } from 'react';

// TODO: get stock to disable adding items if the current stock number is reached

const CounterBtn = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount - 1 < 1) return 1;

      return prevCount - 1;
    });
  };
  return (
    <div className="flex items-center gap-3 ">
      <Button className="counter-btn" onClick={decrement}>
        <Minus />
      </Button>
      <p className="font-semibold ">{count}</p>
      <Button className="counter-btn" onClick={increment}>
        <Plus />
      </Button>
    </div>
  );
};

export default CounterBtn;
