import { useEffect } from "react";
import { deleteTodo } from "../../functions/functions.js";
import "../../index.css";

function Todo(props) {
  useEffect(() => {
    props.fetchData("from Todo");
  }, []);

  const handleDelete = (todo) => {
    console.log("deleting ", todo);
    deleteTodo(todo);
    props.fetchData("from Delete");
  };

  return (
    <div>
      <ul class="collection with-header">
        <li class="collection-header">
          <div class="row">
            <div class="col s6 m6">
              <h4>Todo list</h4>
            </div>
            {/* <div class="col s6 m6">
              <a
                onClick={props.fetchData}
                class="btn-floating waves-effect tiny waves-light red"
              >
                <i class="material-icons">autorenew</i>
              </a>
            </div> */}
          </div>
        </li>
        {props.todos ? (
          props.todos.map((todo, index) => {
            // console.log("id todo: ", todo._id);
            return (
              <li key={index} class="collection-item">
                <div>
                  <span>
                    {todo.title}: {todo.content}
                  </span>
                  <a
                    onClick={() => handleDelete(todo._id)}
                    class="secondary-content delete"
                    onmouseover="this.style.cursor='pointer';"
                  >
                    <i class="material-icons">delete</i>
                  </a>
                </div>
              </li>
            );
          })
        ) : (
          <div>
            <h3>There are no todos</h3>
            <h5>
              Please verify your .env file (you can copy it from the
              .env-example).
            </h5>
            <h5>Or create a new one if your .env file is okay.</h5>
          </div>
        )}
      </ul>
    </div>
  );
}
export default Todo;
