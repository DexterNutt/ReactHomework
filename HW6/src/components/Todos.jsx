import React from "react";
import PropTypes from "prop-types";

export const Todos = ({ todoList, markToDoAsDone }) => {
  return (
    <div id="posts">
      {todoList.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td>
                    <input
                      type="checkbox"
                      value={todo.completed}
                      checked={todo.completed}
                      onChange={() => {
                        markToDoAsDone(todo);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h3>...</h3>
      )}
    </div>
  );
};

// Todos.propTypes = {
//   listOfToDos: PropTypes.arrayOf(PropTypes.object).isRequired,
//   markToDoAsDone: PropTypes.func.isRequired,
// };
