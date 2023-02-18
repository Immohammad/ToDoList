import React from "react";

function Tasks({ task, completeTask }) {
  return (
    <div className="task">
      <div className="content">
        <span> {task.taskName}</span> <span>{task.taskDescription}</span>{" "}
        <span style={{ flex: "25%" }}>{task.date}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Tasks;
