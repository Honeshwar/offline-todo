import { useContextValue } from "../context/todoContext";
import List from "./List";

function TodoList() {
  const { todos } = useContextValue();

  const completedTodos = todos?.filter((todo) => todo.completed);
  const unCompletedTodos = todos?.filter((todo) => !todo.completed);
  return (
    <div className="flex flex-col md:flex-row gap-5 p-5 overflow-y-auto  ">
      <List heading="UnCompleted Todos" todos={unCompletedTodos} />
      <List
        heading="Completed Todos"
        todos={completedTodos}
        isCompleted={true}
      />
    </div>
  );
}

export default TodoList;
