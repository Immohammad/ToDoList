import React from "react";
import { useForm } from "react-hook-form";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
function EditTask({ task, setAsNull }) {

  const {
    register,
    handleSubmit
  } = useForm({
    defaultValues: {
      task: task.name,
      description: task.description,
    },
  });
  const editTask = (data) => {
    task.name = data.task;
    task.description = data.description;
    setAsNull(null);
  };

  return (
    <div id="formOverlay">
      <div id="exitEdit" onClick={() => setAsNull(null)}><HighlightOffIcon/></div>
      <form onSubmit={handleSubmit(editTask)} id="editForm">
        <div>
          <label className="form__label">عنوان</label>
          <input
            type="text"
            placeholder="اجباری"
            className="form__input"
            {...register("task")}
            required
            maxLength={120}
            style={{border:"1px solid #24707a"}}
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
            style={{border:"1px solid #24707a"}}
          ></textarea>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="submit"
            value="ویرایش"
            className="submitButtons"
            style={{ justifyContent: "center", backgroundColor:"#e2bf44" }}
          />
        </div>
      </form>
    </div>
  );
}

export default EditTask;
