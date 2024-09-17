import { useQuery } from "@tanstack/react-query";
import { readTasks } from "../../services/apiTasks";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import { Form } from "react-hook-form";

function TodoMain() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: readTasks,
  });

  console.log(tasks);
  console.log(isLoading);
  if (isLoading) return <Spinner />;

  return (
    <ul className="grid grid-cols-3 gap-4 bg-stone-600  rounded text-xl mt-10   h-[65dvh] ">
      <li className="text-center  px-3 mt-3 mb-3 w-full border-r border-stone-500 overflow-y-auto custom-scrollbar">
        <button
          className="w-full bg-yellow-900 p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          New
        </button>
        {isOpen && <Form />}

        <ul className="mt-6 flex flex-col gap-2">
          {tasks.map((task) => (
            <li className="w-full bg-yellow-900 p-2 rounded-md">
              {task.description}
            </li>
          ))}
        </ul>
      </li>
      <li className="text-center  p-3 w-full border-r border-stone-500">
        1<div>2</div>
      </li>
      <li className="text-center  p-3 w-full border-r border-stone-500">
        1<div>2</div>
      </li>
    </ul>
  );
}

export default TodoMain;
