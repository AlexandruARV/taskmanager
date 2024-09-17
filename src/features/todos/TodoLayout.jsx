import TodoHeader from "./TodoHeader";
import TodoMain from "./TodoMain";

function TodoLayout() {
  return (
    <div className="max-w-[80rem] mx-auto mt-10">
      <TodoHeader />
      <TodoMain />
    </div>
  );
}

export default TodoLayout;
