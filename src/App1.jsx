import "./App.css";
import Todo from "./components/todo.jsx";
import Popup from "./components/popup.jsx";
import Todotitle from "./components/Todotitle.jsx";
import { useEffect, useState } from "react";
// import counter from "./components/kounter.jsx";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  // const [popupOpen,setPopupOpen] = useState(true)

  // return <counter />;

  function togglepopup() {
    setPopupOpen(true);
    console.log("parent notified");
  }

  function closepopup() {
    setPopupOpen(false);
    console.log("parent notified");
  }
  useEffect(() => {
    console.log("Only when component mounts");
  }, []);
  useEffect(() => {
    console.log(`when component mounts and ${popupOpen} changes`);
  }, []);

  return (
    <>
      <Todotitle />
      <div>
        <input
          className="inputting"
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
      {popupOpen && (
        <Popup closepopup={closepopup} title="Are you 10000% sure boy ?" />
      )}
    </>
  );
}
export default App;
