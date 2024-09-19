import supabase from "./supabase";

export async function readTasks() {
  let { data: tasks, error } = await supabase.from("tasks").select("*");

  if (error) throw new Error("Something went wrong");

  return tasks;
}

export async function createTask(newTask) {
  const { data, error } = await supabase
    .from("tasks")
    .insert([{ ...newTask }])
    .select();

  console.log(newTask);
  if (error) throw new Error("Something went wrong");

  return data;
}
