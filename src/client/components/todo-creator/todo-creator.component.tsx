import React, { useState } from "react";

import "./todo-creator.css";

import { Add } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";

import { TodoStatus } from "../../types/todos.types";
import { actions } from "../reducer";

const { addTodo } = actions;
const TodoCreator = () => {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");

  const addTodoToList = () => {
    dispatch(
      addTodo({
        id: uuid(),
        description: todoText,
        status: TodoStatus.ADDED,
        createdAt: new Date().toString(),
      })
    );
    setTodoText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !!todoText.length) {
      addTodoToList();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <div className="todo-creator">
      <input
        type="text"
        placeholder="add your todo task"
        id="todo-input"
        value={todoText}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <button
        onClick={addTodoToList}
        disabled={!todoText.length}
        data-testid="addTodo"
      >
        <Add />
      </button>
    </div>
  );
};

export default TodoCreator;
