import React, { useState } from "react";
import Done from "./components/done";
import Tasks from "./components/tasks";

function App() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const createTask = (event) => {
    event.preventDefault();
    const newTask = {
      taskName: task,
      taskDescription: description,
      deadline: deadline,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDescription("");
    setDeadline(0);
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
    if (a.deadline < b.deadline) {
      return -1;
    }
    if (a.deadline > b.deadline) {
      return 1;
    }
    return 0;
  };

  return (
    <div className="App">
      <div className="header">
        <form onSubmit={createTask}>
          <div>
            <label className="form__label">عنوان</label>
            <input
              type="text"
              placeholder="Required"
              className="form__input"
              onChange={(event) => setTask(event.target.value)}
              value={task}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Optinal"
              className="form__input"
              onChange={(event) => setDescription(event.target.value)}
              maxLength={100}
              value={description}
            ></textarea>
            <label className="form__label">Description</label>
          </div>
          <div>
            <input
              type="number"
              placeholder="Deadline"
              min="0"
              className="form__input"
              onChange={(event) =>
                setDeadline(Number(event.target.value))
              }
              value={deadline}
            />
            <label className="form__label">Deadline</label>
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
          <span className="group">Should do</span>
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
            Done
          </span>
          {doneList.map((task, key) => {
            return <Done key={key} task={task} addTask={add} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
