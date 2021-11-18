import axios from "axios";

const URL = "http://localhost:8000/todos";

export const getTodos = () => {
  return axios.get(URL);
};

export const createTodo = (newTodo) => {
  axios.post(URL, newTodo);
};
