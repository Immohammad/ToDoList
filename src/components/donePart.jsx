import React, { useEffect } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function DonePart({ doneList, changeDoneList }) {
  // useEffect(() => {},[doneList])
  const deleteTask = (taskToDelete) => {
    changeDoneList(
      doneList.filter((task) => {
        return task !== taskToDelete;
      })
    );
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
    <div className="toDos">
      <span
        className="group"
        style={{
          color: "#fc145a",
          border: "#fc145a",
          borderStyle: "dashed",
        }}
      >
        انجام‌شده
      </span>
      {doneList &&
        doneList.sort(compare).map((task, key) => {
          return (
            <div className="task" key={key}>
              <div className="content" id="doneContainer">
                <span> {task.taskName}</span> <span>{task.date}</span>{" "}
              </div>
              <button
                onClick={() => {
                  deleteTask(task);
                }}
                id="deleteForEver"
              >
                <DeleteForeverOutlinedIcon />
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default DonePart;
