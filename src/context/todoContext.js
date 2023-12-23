import { createContext, useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
// create context
const context = createContext();

// create provider component
function TodoProvider({ children }) {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    if (todos === null) {
      const fetchTodos = JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(fetchTodos);
    } else if (todos.length >= 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const getTodos = async () => {};
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      id: new Date().getTime().toString(), //return current timestamp in milliseconds as string
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    toast.success("Todos added successfully");
  };
  const resetTodosHandler = () => {
    setTodos([]);
    toast.success("Todos reset successfully");
  };
  const markedAsCompletedHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
    toast.success("Toggle IsCompleted Todos successfully");
  };
  return (
    <context.Provider
      value={{
        todos,
        getTodos,
        addTodoHandler,
        resetTodosHandler,
        markedAsCompletedHandler,
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </context.Provider>
  );
}

// create consumer ( custom hook)
function useContextValue() {
  return useContext(context);
}

export { TodoProvider, useContextValue };
