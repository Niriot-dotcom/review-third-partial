import { useEffect, useState } from "react";
import { getTodos } from "../../functions/functions.js";

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      console.log("data\n", data);
      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <>
            <h1>{todo.title}</h1>
            <p>{todo.content}</p>
          </>
        );
      })}
    </div>
  );
}
export default Todo;
