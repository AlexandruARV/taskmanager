function TodoHeader() {
  return (
    <ul className="grid grid-cols-3 gap-4 bg-stone-600  rounded text-xl">
      <li className="text-center self-center p-3 w-full border-r border-stone-500">
        New task
      </li>
      <li className="text-center self-center  p-3 border-r w-full border-stone-500">
        On Process
      </li>
      <li className="text-center self-center p-3 w-full">Task completed</li>
    </ul>
  );
}

export default TodoHeader;
