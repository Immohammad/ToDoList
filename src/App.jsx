import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TaskPart from "./components/taskPart";
import DonePart from "./components/donePart";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const current = new Date();
  const now = `${current.getFullYear()}/${
    current.getMonth() + 1
  }/${current.getDate()}`;

  const createTask = (data) => {
    const newTask = {
      name: data.task,
      description: data.description,
      date: now,
    };
    setTodoList([...todoList, newTask]);
    reset();
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
              className="submitButtons"
              style={{ justifyContent: "center" }}
            />
          </div>
        </form>
      </div>
      <div
      id="listsContainer"
      >
        <TaskPart
          list={todoList}
          changeList={setTodoList}
          deleted={doneList}
          changeDeleted={setDoneList}
        />
        <DonePart doneList={doneList} changeDoneList={setDoneList} />
      </div>
    </div>
  );
}

export default App;
