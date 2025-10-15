import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../components/TodoItem";

describe("TodoItem", () => {
  const mockTodo = { id: 1, text: "Test", completed: false };
  const onToggle = jest.fn();
  const onDelete = jest.fn();

  test("отображает текст задачи", () => {
    render(
      <TodoItem todo={mockTodo} onToggle={onToggle} onDelete={onDelete} />
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("вызывает onToggle при клике по чекбоксу", () => {
    render(
      <TodoItem todo={mockTodo} onToggle={onToggle} onDelete={onDelete} />
    );
    fireEvent.click(screen.getByRole("checkbox"));
    expect(onToggle).toHaveBeenCalledWith(1);
  });

  test("вызывает onDelete при нажатии кнопки", () => {
    render(
      <TodoItem todo={mockTodo} onToggle={onToggle} onDelete={onDelete} />
    );
    fireEvent.click(screen.getByText("Удалить"));
    expect(onDelete).toHaveBeenCalledWith(1);
  });
});
