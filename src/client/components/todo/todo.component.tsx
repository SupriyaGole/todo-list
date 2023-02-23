import React from "react";

import { DeleteOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import { TodoItem } from "../../types/todos.types";
import { actions } from "../reducer";

const { deleteTodo } = actions;
const Todo = ({ item }: { item: TodoItem }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTodo(item.id));
  };

  return (
    <div className="todo">
      <div className="todo-detail">
        <button className="delete-todo" onClick={deleteItem}>
          <DeleteOutlined />
        </button>
        <span>{item.description}</span>
      </div>
      <span className="creation-date">
        {new Date(item.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
};

export default Todo;
