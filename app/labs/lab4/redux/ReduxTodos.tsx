import { useState } from "react";
import { useSelector } from "react-redux";
import ReduxTodoForm, { defaultTodoTitle } from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";
import type { RootState } from "./store";

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const [title, setTitle] = useState(defaultTodoTitle);
  const [editingId, setEditingId] = useState<string | null>(null);
  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <ReduxTodoForm
        title={title}
        setTitle={setTitle}
        editingId={editingId}
        setEditingId={setEditingId}
      />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <ReduxTodoItem
            key={todo.id}
            todo={todo}
            onEdit={(t) => {
              setTitle(t.title);
              setEditingId(t.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
