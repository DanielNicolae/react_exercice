import React, { useState } from "react";
import './App.css';
import "./src/styles/TextField.css";
import Overview from './components/Overview';
import TextField from "./components/TextField";

function App() {
  const [taskArray, setTaskArray] = useState([]);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    setTaskArray(
      [
        ...taskArray,
        text
      ]
    )
    console.log(taskArray);
    e.preventDefault();
  }

  function editText(e) {
    e.preventDefault();

  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => {
          setText(text => e.target.value);
          console.log(text);
        }}></input>
        <button>Submit</button>
      </form>
      <Overview list={taskArray} />
      <TextField labelName={"First name"} text={text} submitFunction={editText} />
    </div>
  );
}

export default App;
