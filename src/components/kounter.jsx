import { useState } from "react";

function kounter() {
  const [array, setarray] = useState([]);

  return (
    <div>
      <h1>{array.join(" ")}</h1>

      <button
        onClick={() => {
          setarray((prevarray) => [...prevarray, "+1"]);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setarray((prevarray) => [...prevarray, "-1"]);
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          setarray([]);
        }}
      >
        Reseter
      </button>
    </div>
  );
}
export default kounter;
