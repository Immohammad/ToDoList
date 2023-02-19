import React, { useState } from "react";
import Done from "./components/done";
import Tasks from "./components/tasks";
import { useForm } from "react-hook-form";
import TaskPart from "./components/taskPart";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const current = new Date();
  const now = `${current.getFullYear()}/${
    current.getMonth() + 1
  }/${current.getDate()}`;

  const createTask = (data) => {
    const newTask = {
      taskName: data.task,
      taskDescription: data.description,
      date: now,
    };
    setTodoList([...todoList, newTask]);
    reset();
    // setTask("");
    // setDescription("");
    // setDeadline(0);
  };

  const add = (taskToAdd) => {
    setDoneList(
      doneList.filter((task) => {
        return task !== taskToAdd;
      })
    );
    setTodoList([...todoList, taskToAdd]);
  };

  return (
    <div className="App">
      <div className="header">
        <form onSubmit={handleSubmit(createTask)}>
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
              value="افزودن"
              className="button-24"
              style={{ justifyContent: "center" }}
            />
          </div>
        </form>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          width: "100%",
        }}
      >
        <TaskPart
          list={todoList}
          changeList={setTodoList}
          deleted={doneList}
          changeDeleted={setDoneList}
        />
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
          {doneList.map((task, key) => {
            return <Done key={key} task={task} addTask={setDoneList} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
