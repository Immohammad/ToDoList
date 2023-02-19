import React from "react";
import { useForm } from "react-hook-form";
import TaskPart from "./components/taskPart";
import DonePart from "./components/donePart";
import useLocalStorage from "./components/useLocalStorage";

function App() {
  // two lists of works. first for to do and second for done.
  // we are using useLocalStorage custom hook to save lists on browser
  // local storage in client side
  const [todoList, setTodoList] = useLocalStorage("todo", []);
  const [doneList, setDoneList] = useLocalStorage("done", []);

  // forms are developed by react-hook-form
  const { register, handleSubmit, reset } = useForm();

  // using Date constructor for saving date
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
    if (todoList) setTodoList([...todoList, newTask]);
    else setTodoList([newTask]);
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
      <div id="listsContainer">
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
