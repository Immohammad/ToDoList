import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditTask from "./editTask";

function TaskPart({ list, changeList, deleted, changeDeleted }) {
  // this component is fully included our tasks part.
  // also edit form is to shape of a overlay on this component
  // first argument of this component is to do list; second is it's setter.
  // third is done list and fourth is it's setter.
  const [taskForEdit, setTaskForEdit] = useState(null);

  const complete = (taskToDelete) => {
    changeList(
      list.filter((task) => {
        return task !== taskToDelete;
      })
    );
    if (deleted) changeDeleted([...deleted, taskToDelete]);
    else changeDeleted([taskToDelete]);
    
  };

  // this method will be used for sorting works by create time
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
                <span> {task.name}</span> <span>{task.description}</span>{" "}
                <span style={{ flex: "25%" }}>{task.date}</span>
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
            </div>
          );
        })}
    </div>
  );
}

export default TaskPart;
