import { useState } from "react";
import CreateTodo from "./components/CreateTodo/createTodo";
import Todo from "./components/Todo/todos";
import { getTodos } from "./functions/functions.js";

function App() {
  const [todos, setTodos] = useState([]);
  const fetchData = async (t) => {
    const data = await getTodos();
    console.log(t);
    // console.log("data\n", data);
    setTimeout(() => {}, 500);
    setTodos(data);
  };

  return (
    <div className="container">
      <CreateTodo fetchData={fetchData} />

      <br></br>
      <br></br>
      <br></br>

      <Todo todos={todos} fetchData={fetchData} />
    </div>
  );
}

export default App;
