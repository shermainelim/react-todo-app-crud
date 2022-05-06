import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodos] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="todo-app">
          <Header />
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodos}
            />
          </div>
          <div>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
