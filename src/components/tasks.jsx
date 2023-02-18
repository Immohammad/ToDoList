import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Tasks({ task, completeTask }) {
  return (
    <div className="task">
      <div className="content">
        <span> {task.taskName}</span> <span>{task.taskDescription}</span>{" "}
        <span style={{ flex: "25%" }}>{task.date}</span>
      </div>
      <button id="edit">
        <EditIcon />
      </button>
      <button
        id="delete"
        onClick={() => {
          completeTask(task);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Tasks;
