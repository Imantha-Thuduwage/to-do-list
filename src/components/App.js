import React, { useState } from "react";
import Items from "./ToDoItems";

function App() {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={Items.addItem}>
          <span>Add</span>
        </button>
        <Items />
      </div>
    </div>
  );
}

export default App;
