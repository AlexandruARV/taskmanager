import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createTask } from "../services/apiTasks";
import { useCreateTask } from "../features/todos/useCreateTask";

function CreateNewTask() {
  const { register, handleSubmit, reset, getValues } = useForm();

  const { isCreating, createTask } = useCreateTask();
  function onSubmit(data) {
    console.log("success");
    createTask({
      ...data,
    });
  }
  function onError() {}
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="flex gap-4 mt-4">
        <label>Task Name</label>
        <input
          id="description"
          type="text"
          disabled={isCreating}
          className="text-black rounded-md w-52"
          {...register("description", { required: "This field is required" })}
        ></input>
      </div>
      <div className="flex gap-4 mt-4">
        <label>Expected Duration</label>
        <input
          id="duration"
          type="time"
          className="text-black rounded-md w-52"
        ></input>
      </div>
      <div className="flex justify-end gap-4 mt-4">
        <button
          className="bg-yellow-700 py-2 px-4 rounded-lg"
          disabled={isCreating}
        >
          Submit
        </button>
        <button
          className="bg-stone-500 py-2 px-4 rounded-lg"
          disabled={isCreating}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CreateNewTask;
