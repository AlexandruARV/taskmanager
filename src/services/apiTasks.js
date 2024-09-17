import supabase from "./supabase";

export async function readTasks() {
  let { data: tasks, error } = await supabase.from("tasks").select("*");

  if (error) throw new Error("Something went wrong");

  return tasks;
}
