import React from 'react';

function TextField(labelName, text, submitFunction) {
  <form onSubmit={submitFunction}>
    <label for={labelName}>{labelName}</label>
    <input type="text" name={labelName} onChange={(e) => {
      setText(text => e.target.value);
      console.log(text);
    }}></input>
    <button>Edit</button>
  </form>
}

export default TextField;