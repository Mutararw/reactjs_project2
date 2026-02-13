import "./App.css";
import Todo from "./components/todo.jsx";
import Popup from "./components/popup.jsx";
import Todotitle from "./components/Todotitle.jsx";
import { useState,useEffect } from "react";
import Kounter from "./components/kounter.jsx";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  // const [popupOpen,setPopupOpen] = useState(true)

  // return <Kounter />;
  function togglepopup(){
    setPopupOpen(true)
    console.log('parent notified')
  }

  function closepopup(){
    setPopupOpen(false);
  }
 

  return (
    <>
      <Todotitle />
      <div>
        <input className="inputting"
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setPopupOpen(true)}>Add to do</button>
      </div>
      <Todo togglepopup={togglepopup}task="Learn react" />
      <Todo togglepopup={togglepopup}task="Finish frontend react" />
      <Todo togglepopup={togglepopup}task="land a junior job " />
      <Todo togglepopup={togglepopup}task="Earn 100k " />
      {popupOpen && <Popup closepopup={closepopup}title="Are you 10000% sure boy ?" />}
    </>
  );
}
export default App;
