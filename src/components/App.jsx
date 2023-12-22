import { TodoInput, TodoList, Card, ResetButton } from "./index";

function App() {
  return (
    <div className="bg-yellow-500 h-screen">
      <h1>App</h1>
      <TodoInput />
      <TodoList />
      <Card />
      <ResetButton />
    </div>
  );
}

export default App;
