import React from "react";
import { Todo } from "../types/Todo";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
