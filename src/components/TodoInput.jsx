import { createRef } from "react";
import { useContextValue } from "../context/todoContext";

function TodoInput() {
  // text and context value
  const text = createRef();
  const { addTodoHandler, todos } = useContextValue();
  console.log("todos", todos);
  //  form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoHandler(text.current.value);
    text.current.value = "";
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full px-5 py-2 flex flex-wrap gap-5 justify-center"
    >
      <input
        type="text"
        placeholder="Add Todo here..."
        className="pl-2 w-full max-w-[400px] min-h-[50px] outline-none  
        rounded"
        ref={text}
        required
      />
      <button className="bg-blue-500 text-white p-2 px-3 hover:bg-blue-700 rounded">
        Add Todo
      </button>
    </form>
  );
}

export default TodoInput;
