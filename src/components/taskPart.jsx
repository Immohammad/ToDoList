import React, { useState } from "react";
import Tasks from "./tasks";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditTask from "./editTask";

function TaskPart({ list, changeList, deleted, changeDeleted }) {
  const [taskForEdit, setTaskForEdit] = useState(null);

  const complete = (taskToDelete) => {
    changeList(
      list.filter((task) => {
        return task !== taskToDelete;
      })
    );
    changeDeleted([...deleted, taskToDelete]);
    console.log(deleted);
  };
  const compare = (a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  };

  return (
    <div
      className="toDos"
      style={{
        borderLeft: "2px dashed #50c878",
        position: "relative",
        minHeight: "400px",
      }}
    >
      {taskForEdit && (
        <EditTask task={taskForEdit} setAsNull={setTaskForEdit} />
      )}
      <span className="group">برای انجام</span>
      {list &&
        list.sort(compare).map((task, key) => {
          return (
            <div className="task" key={key}>
              <div className="content">
                <span> {task.taskName}</span>{" "}
                <span>{task.taskDescription}</span>{" "}
                <span style={{ flex: "25%" }}>{task.date}</span>
              </div>
              <button id="edit" onClick={() => setTaskForEdit(task)}>
                <EditIcon />
              </button>
              <button
                id="delete"
                onClick={() => {
                  complete(task);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default TaskPart;
