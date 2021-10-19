import React, { useState } from "react";
import './App.css';
import "./styles/TextField.css";
import Overview from './components/Overview';
// import TextField from "./components/TextField";

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
    if (inputField) {
      inputField.classList.add("hide");
    }
    const firstName = document.getElementsByClassName("firstName")[0];
    if (firstName) {
      firstName.classList.add("show");
      firstName.textContent = text;
    }
  }

  function editFirstName() {
    const firstName = document.getElementsByClassName("firstName")[0];
    firstName.classList.remove("show");
    firstName.classList.add("hide");
    const inputField = document.getElementsByClassName("inputFirstName")[0];
    if (inputField) {
      inputField.classList.remove("hide");
      inputField.classList.add("show");
    }

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
      <p className="firstName "></p>
      <form className="inputFirstName" onSubmit={submitFirstName}>
        <label for="First name">First name</label>
        <input type="text" name="First name" onChange={(e) => {
          setText(text => e.target.value);
        }}></input>
        <button>Submit</button>
      </form>
      <button classname="editFirstName" onClick={editFirstName}>Edit</button>
    </div>
  );
}

export default App;
