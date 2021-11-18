import express from "express";
import { createTodo, getTodos } from "../controller/controller.js";

const TodoRouter = express.Router();

TodoRouter.get("/", getTodos);
TodoRouter.post("/", createTodo);

export default TodoRouter;
