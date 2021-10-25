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
  function submitLastName(e) {
    e.preventDefault();
    const inputField = document.getElementsByClassName("inputLastName")[0];
    if (inputField) {
      inputField.classList.add("hide");
    }
    const lastName = document.getElementsByClassName("lastName")[0];
    if (lastName) {
      lastName.classList.add("show");
      lastName.textContent = text;
    }
  }
  function submitAge(e) {
    e.preventDefault();
    const inputField = document.getElementsByClassName("inputAge")[0];
    if (inputField) {
      inputField.classList.add("hide");
    }
    const age = document.getElementsByClassName("age")[0];
    if (age) {
      age.classList.add("show");
      age.textContent = text;
    }
  }
  function submitExperience(e) {
    e.preventDefault();
    const inputField = document.getElementsByClassName("inputExperience")[0];
    if (inputField) {
      inputField.classList.add("hide");
    }
    const experience = document.getElementsByClassName("experience")[0];
    if (experience) {
      experience.classList.add("show");
      experience.textContent = text;
    }
  }
  function submitEducation(e) {
    e.preventDefault();
    const inputField = document.getElementsByClassName("inputEducation")[0];
    if (inputField) {
      inputField.classList.add("hide");
    }
    const education = document.getElementsByClassName("education")[0];
    if (education) {
      education.classList.add("show");
      education.textContent = text;
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
  function editLastName() {
    const lastName = document.getElementsByClassName("lastName")[0];
    lastName.classList.remove("show");
    lastName.classList.add("hide");
    const inputField = document.getElementsByClassName("inputLastName")[0];
    if (inputField) {
      inputField.classList.remove("hide");
      inputField.classList.add("show");
    }
  }
  function editAge() {
    const age = document.getElementsByClassName("age")[0];
    age.classList.remove("show");
    age.classList.add("hide");
    const inputField = document.getElementsByClassName("inputAge")[0];
    if (inputField) {
      inputField.classList.remove("hide");
      inputField.classList.add("show");
    }
  }
  function editExperience() {
    const experience = document.getElementsByClassName("experience")[0];
    experience.classList.remove("show");
    experience.classList.add("hide");
    const inputField = document.getElementsByClassName("inputExperience")[0];
    if (inputField) {
      inputField.classList.remove("hide");
      inputField.classList.add("show");
    }
  }
  function editEducation() {
    const education = document.getElementsByClassName("education")[0];
    education.classList.remove("show");
    education.classList.add("hide");
    const inputField = document.getElementsByClassName("inputEducation")[0];
    if (inputField) {
      inputField.classList.remove("hide");
      inputField.classList.add("show");
    }
  }

  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => {
          setText(text => e.target.value);
          console.log(text);
        }}></input>
        <button>Submit</button>
      </form> */}
      {/* <Overview list={taskArray} /> */}
      <div className="firstNameContainer">
        <p className="firstName"></p>
        <form className="inputFirstName" onSubmit={submitFirstName}>
          <label for="First name">First name</label>
          <input type="text" name="First name" onChange={(e) => {
            setText(text => e.target.value);
          }}></input>
          <button>Submit</button>
        </form>
        <button classname="editFirstName hide" onClick={editFirstName}>Edit</button>
      </div>
      <div className="lastNameContainer">
        <p className="lastName"></p>
        <form className="inputLastName" onSubmit={submitLastName}>
          <label for="Last name">Last name</label>
          <input type="text" name="Last name" onChange={(e) => {
            setText(text => e.target.value);
          }}></input>
          <button>Submit</button>
        </form>
        <button classname="editLastName" onClick={editLastName}>Edit</button>
      </div>
      <div className="ageContainer">
        <p className="age"></p>
        <form className="inputAge" onSubmit={submitAge}>
          <label for="Age">Age</label>
          <input type="text" name="Age" onChange={(e) => {
            setText(text => e.target.value);
          }}></input>
          <button>Submit</button>
        </form>
        <button classname="editAge" onClick={editAge}>Edit</button>
      </div>
      <div className="experienceContainer">
        <p className="experience"></p>
        <form className="inputExperience" onSubmit={submitExperience}>
          <label for="Experience">Experience</label>
          <textarea type="text" name="Experience" onChange={(e) => {
            setText(text => e.target.value);
          }}></textarea>
          <button>Submit</button>
        </form>
        <button classname="editExperience" onClick={editExperience}>Edit</button>
      </div>
      <div className="educationContainer">
        <p className="education"></p>
        <form className="inputEducation" onSubmit={submitEducation}>
          <label for="Education">Education</label>
          <textarea type="text" name="Education" onChange={(e) => {
            setText(text => e.target.value);
          }}></textarea>
          <button>Submit</button>
        </form>
        <button classname="editEducation" onClick={editEducation}>Edit</button>
      </div>
    </div>
  );
}

export default App;
