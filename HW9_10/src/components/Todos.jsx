import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodosRequest, toggleTodo } from "../actions/TodoActions";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.TodoReducer.todos);
  const fail = useSelector((state) => state.TodoReducer.error);

  useEffect(() => {
    dispatch(getTodosRequest());
  }, []);

  return (
    <div id="todos">
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <input
              type="checkbox"
              checked={todo.completed}
              value={todo.completed}
              onChange={() => {
                dispatch(toggleTodo(todo.id));
              }}
            />
          </div>
        );
      })}
      {fail && <h1>{fail}</h1>}
    </div>
  );
};
