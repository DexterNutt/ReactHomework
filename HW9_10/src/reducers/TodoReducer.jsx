import {
  GET_TODOS_REJ,
  GET_TODOS_RES,
  TODO_COMPLETED,
} from "../constants/TodoConstants";

const initialState = {
  todos: [],
  error: "",
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_RES:
      return {
        ...state,
        todos: action.payload,
      };
    case GET_TODOS_REJ:
      return {
        ...state,
        error: action.payload,
      };
    case TODO_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default TodoReducer;
