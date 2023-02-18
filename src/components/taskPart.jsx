import React from "react";
import Tasks from "./tasks";
import { useForm } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TaskPart({ list, changeList, deleted, changeDeleted }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const complete = (taskToDelete) => {
    changeList(
      list.filter((task) => {
        return task !== taskToDelete;
      })
    );
    changeDeleted([...deleted, taskToDelete]);
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
  const editTask = (task) => {};
  const goToEdit = (task) => {
    document.getElementById("formOverlay").style.display = "block";
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
      <div id="formOverlay">
        <form onSubmit={handleSubmit(editTask)} id='editForm'>
          <div>
            <label className="form__label">عنوان</label>
            <input
              type="text"
              placeholder="اجباری"
              className="form__input"
              {...register("task")}
              required
              maxLength={120}
            />
            {/* {errors.task && errors.task.type === "required" && (
              <span>اجباری است</span>
            )}
            {errors.task && errors.task.type === "maxLength" && (
              <span>حداکثر ۱۲۰ کاراکتر</span>
            )} */}
          </div>
          <div>
            <label className="form__label">توضیحات</label>
            <textarea
              placeholder="اجباری"
              className="form__input"
              {...register("description")}
              required
              maxLength={250}
            ></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="submit"
              value="ویرایش"
              className="button-24"
              style={{ justifyContent: "center" }}
            />
          </div>
        </form>
      </div>
      <span className="group">برای انجام</span>
      {
        // todoList.map((task: ITask, key: number) => {
        list.sort(compare).map((task, key) => {
          //    <Tasks key={key} task={task} completeTask={complete} />;
          return (
            <div className="task" key={key}>
              <div className="content">
                <span> {task.taskName}</span>{" "}
                <span>{task.taskDescription}</span>{" "}
                <span style={{ flex: "25%" }}>{task.date}</span>
              </div>
              <button id="edit" onClick={() => goToEdit()}>
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
        })
      }
    </div>
  );
}

export default TaskPart;
