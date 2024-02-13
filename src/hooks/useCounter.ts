import { useState } from "react";

// * types
type UseCounterReturn = [number, { increment: Function; decrement: Function }];

const useCounter = (initialValue: number = 0): UseCounterReturn => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount((prev) => ++prev);
  const decrement = () => setCount((prev) => --prev);

  return [count, { increment, decrement }];
};

export default useCounter;
