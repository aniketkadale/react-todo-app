import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

function ToDo() {
  const savedTasks = localStorage.getItem("tasks");
  const initialTasks = savedTasks ? JSON.parse(savedTasks) : [];
  const [items, setItems] = useState(initialTasks);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
    // console.log(newValue);
  }

  function addItems(e) {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });

    localStorage.setItem("tasks", JSON.stringify(items));
    setInputText("");
  }

  function deleteItem(index) {
    setItems((prevItems) => {
      // Use filter to create a new array without the item at the specified index
      return prevItems.filter((item, i) => i !== index);
    });
  }

  return (
    <div className="screen-container">
      <h1>To-Do List</h1>
      <div>
        <input
          onChange={handleChange}
          className="inputs"
          type="text"
          placeholder="Add your to-do task"
          value={inputText}
        />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div className="tasks">
        <ul>
          {items.map((item, index) => (
            <TodoItem
              key={index}
              id={index}
              task={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
