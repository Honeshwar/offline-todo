import { TodoInput, TodoList, ResetButton } from "./index";

function App() {
  return (
    <div className="bg-yellow-500 h-screen w-full flex flex-col gap-5 pt-5">
      <h1 className="text-2xl text-white text-center font-bold underline">
        Offline Todo App
      </h1>
      <TodoInput />
      <TodoList />
      <ResetButton />
    </div>
  );
}

export default App;
