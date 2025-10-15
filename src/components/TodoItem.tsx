import React from "react";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Todo } from "../types/Todo";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="p-d-flex p-ai-center p-jc-between p-mb-2">
      <div className="p-d-flex p-ai-center">
        <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <span
          style={{
            marginLeft: "10px",
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      </div>
      <Button
        label="Удалить"
        className="p-button-danger p-button-sm"
        onClick={() => onDelete(todo.id)}
      />
    </div>
  );
};
