import React, { useState } from "react";
import Done from "./components/done";
import Tasks from "./components/tasks";
import { useForm } from "react-hook-form";

function App() {
  // const [task, setTask] = useState("");
  // const [description, setDescription] = useState("");
  // const [deadline, setDeadline] = useState(0);
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

  const complete = (taskToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task !== taskToDelete;
      })
    );
    setDoneList([...doneList, taskToDelete]);
  };

  const add = (taskToAdd) => {
    setDoneList(
      doneList.filter((task) => {
        return task !== taskToAdd;
      })
    );
    setTodoList([...todoList, taskToAdd]);
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
              placeholder="اختیاری"
              className="form__input"
              {...register("description")}
              required
              maxLength={250}
            ></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="submit"
              value="Add"
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
        <div className="toDos" style={{ borderRight: "2px dashed #50c878" }}>
          <span className="group">برای انجام</span>
          {
            // todoList.map((task: ITask, key: number) => {
            todoList.sort(compare).map((task, key) => {
              return <Tasks key={key} task={task} completeTask={complete} />;
            })
          }
        </div>
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
            return <Done key={key} task={task} addTask={add} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
