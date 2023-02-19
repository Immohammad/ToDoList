import React from "react";
import { useForm } from "react-hook-form";

function EditTask({ task, setAsNull }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task: task.taskName,
      description: task.taskDescription,
    },
  });

  const editTask = (data) => {
    task.taskName = data.task;
    task.taskDescription = data.description;
  };
  return (
    <div id="formOverlay">
      <div onClick={() => setAsNull(null)}>X</div>
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
  );
}

export default EditTask;
