import React, { useState } from "react";

function TodoItem(props) {
  const [isTaskDone, setIsTaskDone] = useState(false);

  function handleClick() {
    setIsTaskDone((prevValue) => {
      return !prevValue;
    });
  }

  const customStyle = {
    textDecoration: isTaskDone ? "line-through 3px #fdcb6e" : "",
  };

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li onClick={handleClick} style={customStyle}>
        {props.task}
      </li>
    </div>
  );
}

export default TodoItem;
