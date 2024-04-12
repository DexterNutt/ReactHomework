import axios from "axios";
import {
  GET_TODOS_REJ,
  GET_TODOS_RES,
  TODO_COMPLETED,
} from "../constants/TodoConstants";

export const getTodosResolve = (todos) => {
  return {
    type: GET_TODOS_RES,
    payload: todos,
  };
};

export const getTodosReject = (error) => {
  return {
    type: GET_TODOS_REJ,
    payload: error,
  };
};

export const getTodosRequest = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => dispatch(getTodosResolve(res.data)))
      .catch((err) => dispatch(getTodosReject(err.message)));
  };
};

export const toggleTodo = (id) => {
  return {
    type: TODO_COMPLETED,
    payload: id,
  };
};
