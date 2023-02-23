import React, { useState } from "react";

import "./todo.css";

import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import { TodoItem, TodoListReducer, TodoStatus } from "../../types/todos.types";
import { actions } from "../reducer";

const { deleteTodo, editTodos } = actions;
const Todo = ({ item }: { item: TodoItem }) => {
  const dispatch = useDispatch();

  const { todos } = useSelector(({ todoList }: TodoListReducer) => ({
    todos: todoList.items,
  }));

  const [todoText, setTodoText] = useState(item.description);
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const deleteItem = () => {
    dispatch(deleteTodo(item.id));
  };

  const editItem = () => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === item.id) {
        return {
          ...todo,
          description: todoText,
          status: TodoStatus.EDITED,
          updatedAt: new Date().toString(),
        };
      }
      return todo;
    });
    dispatch(editTodos(editedTodos));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !!todoText.length) {
      editItem();
      setIsEditEnabled(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <div className="todo">
      <div className="todo-detail">
        {isEditEnabled ? (
          <input
            type="text"
            placeholder="edit your todo task"
            id="todo-edit-input"
            value={todoText}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
        ) : (
          <span>{item.description}</span>
        )}
        <span className="creation-date">
          {new Date(item.createdAt).toLocaleDateString()}
        </span>
      </div>
      <div className="todo-actions">
        <button
          className="edit-todo"
          onClick={() => setIsEditEnabled(!isEditEnabled)}
          data-testid="editTodo"
        >
          <EditOutlined />
        </button>
        <button
          className="delete-todo"
          onClick={deleteItem}
          data-testid="deleteTodo"
        >
          <DeleteOutlined />
        </button>
      </div>
    </div>
  );
};

export default Todo;
