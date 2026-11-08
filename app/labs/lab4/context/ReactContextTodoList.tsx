"use client";

import { useState } from "react";
import { TodosProvider, useTodosContext } from "./todosContext";

function TodoForm() {
  const { addTodo } = useTodosContext();
  const [title, setTitle] = useState("");
  const add = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    addTodo(trimmed);
    setTitle("");
  };
  return (
    <div className="mb-2 flex gap-2">
      <input
        className="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="wd-context-todo-title"
      />
      <button
        type="button"
        onClick={add}
        id="wd-context-todo-add-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add
      </button>
    </div>
  );
}

function TodoItem({ id, title }: { id: string; title: string }) {
  const { updateTodo, deleteTodo } = useTodosContext();
  return (
    <li className="mb-1 flex max-w-md items-center gap-2 rounded border border-neutral-200 px-3 py-1">
      <input
        className="w-full rounded border border-neutral-300 px-2 py-0.5"
        value={title}
        onChange={(e) => updateTodo(id, e.target.value)}
        id={`wd-context-todo-update-${id}`}
      />
      <button
        type="button"
        onClick={() => deleteTodo(id)}
        id={`wd-context-todo-delete-${id}-click`}
        className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
      >
        Delete
      </button>
    </li>
  );
}

function TodoItems() {
  const { todos } = useTodosContext();
  return (
    <ul className="m-0 list-none p-0">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </ul>
  );
}

export default function ReactContextTodoList() {
  return (
    <div id="wd-context-todo-list">
      <h3>Todo List</h3>
      <TodosProvider>
        <TodoForm />
        <TodoItems />
      </TodosProvider>
    </div>
  );
}
