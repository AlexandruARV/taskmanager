import { useState } from "react";

function ShowingButtons({ task }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <div className="pb-2">{task.description}</div>
      <div hidden={isOpen}>
        <div className="flex justify-around bg-slate-500 p-2 rounded-b-md">
          <button>Delete</button>
          <button>Update</button>
          <button>Start</button>
        </div>
      </div>
    </div>
  );
}

export default ShowingButtons;
