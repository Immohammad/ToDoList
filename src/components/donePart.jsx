import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function DonePart({ doneList, changeDoneList }) {
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
    <div className="toDos" style={{minHeight: "200px"}}>
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
                <span> {task.name}</span> <span>{task.date}</span>{" "}
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
