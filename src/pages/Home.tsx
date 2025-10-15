import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Todo } from "../types/Todo";
import { TodoList } from "../components/TodoList";

export const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo: Todo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Мои задачи</h2>
      <div className="p-d-flex p-ai-center p-mb-3">
        <InputText
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите задачу"
          className="p-mr-2"
        />
        <Button label="Добавить" onClick={addTodo} />
      </div>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};
