import * as api from "../api/api.js";

export const getTodos = async () => {
  try {
    const { data } = await api.getTodos();
    // console.log("the data from function is:\n", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createTodo = async () => {
  try {
    const { data } = await api.createTodo();
    return data;
  } catch (err) {
    console.log(err);
  }
};
