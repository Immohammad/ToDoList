import React from 'react'

function done({ task, addTask }) {
  return (
    <div className="task">
      <div className="content" id="doneContainer">
        <span> {task.taskName}</span> <span>{task.date}</span>{" "}
      </div>
      <button
        onClick={() => {
          addTask(task);
        }}
        style={{backgroundColor: "#50c878"}}
      >
        +
      </button>
    </div>
  );
}
export default done
