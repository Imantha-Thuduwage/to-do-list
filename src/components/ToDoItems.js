import React, {useState} from "react";
import App from "./App";

function Items() {
  const [items, setItems] = useState([]);
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, App.inputText];
    });
    App.setInputText("");
  }
  return (
    <div>
      <ul>
        {items.map((todoItem) => (
          <li>{todoItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default Items;
