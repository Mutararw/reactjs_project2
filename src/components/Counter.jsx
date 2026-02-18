import { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      {/* <button onClick={
      setCount(prevcount) => (prevcount + 1)
      setCount(prevcount) =>
      (prevcount + 1)  
      }>Increment</button> */}
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default counter;
