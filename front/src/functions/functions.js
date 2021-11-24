import * as api from "../api/api.js";

export const getTodos = async () => {
  try {
    const { data } = await api.getTodos();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createTodo = async (t, c) => {
  try {
    const { data } = await api.createTodo({
      title: t,
      content: c,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = async (i) => {
  try {
    const { data } = await api.deleteTodo({
      id: i,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
