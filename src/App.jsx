import "./App.css";
import Todo from "./components/todo.jsx";
import Popup from "./components/popup.jsx";
import Todotitle from "./components/Todotitle.jsx";
import { useState } from "react";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  // const [popupOpen,setPopupOpen] = useState(true)

  // return <Counter />;

  return (
    <>
      <Todotitle />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setPopupOpen(true)}>Add to do</button>
      </div>
      <Todo task="Learn react" />
      <Todo task="Finish frontend react" />
      <Todo task="land a junior job " />
      <Todo task="Earn 100k " />
      {popupOpen ? <Popup pop="Are you 10000% sure boy ?" /> : null}
    </>
  );
}
export default App;
