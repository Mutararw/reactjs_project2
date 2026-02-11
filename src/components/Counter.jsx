import { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      {/* <button onClick={
      setCount(prevcount) => (prevcount + 1)
      setCount(prevcount) =>
      (prevcount + 1)  
      }>Increment</button> */}
      <button onClick={() => setcount(count - 1)}>Decrement</button>
      <button onClick={() => setcount(count == 0)}>Reset</button>
    </div>
  );
}
export default counter;
