import React from "react";
import ReactDOM from "react-dom/client";
import "./index";
import { App } from "./components/";
import { TodoProvider } from "./context/todoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
);
