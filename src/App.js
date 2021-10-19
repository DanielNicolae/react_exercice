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

  function submitFirstName(e) {
    e.preventDefault();
    const inputField = document.getElementsByClassName("inputFirstName")[0];
    inputField.classList.add("hide");
    const firstName = document.getElementsByClassName("firstName")[0];
    firstName.classList.add("show");
  }

  function editFirstName() {
    const firstName = document.getElementsByClassName("firstName")[0];
    firstName.classList.remove("show");
    firstName.classList.add("hide");
    const inputField = document.getElementsByClassName("inputFirstName")[0];
    inputField.classList.remove("hide");
    inputField.classList.add("show");
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
      <p className="firstName hide"></p>
      <TextField className={inputFirstName} labelName={"First name"} text={text} submitFunction={submitFirstName} />
      <button classname="editFirstName" onClick={editFirstName}>Edit</button>
    </div>
  );
}

export default App;
