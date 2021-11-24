import { useState } from "react";
import { createTodo } from "../../functions/functions.js";

function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOnClick = () => {
    createTodo(title, content);
    setTitle("");
    setContent("");
    props.fetchData("from CreateTodo");
  };

  return (
    <>
      <h4>Create todo</h4>

      <div class="row">
        <div class="input-field col s6">
          <input
            id="title"
            type="text"
            class="validate"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label for="title">Title</label>
        </div>
        <div class="input-field col s6"></div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input
            id="content"
            type="text"
            class="validate"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <label for="content">Content</label>
        </div>
      </div>

      {/* <h3>title: {title}</h3>
      <h3>content: {content}</h3> */}

      <a onClick={handleOnClick} class="waves-effect waves-light btn">
        <i class="material-icons left">add_circle</i>create
      </a>
    </>
  );
}
export default CreateTodo;
