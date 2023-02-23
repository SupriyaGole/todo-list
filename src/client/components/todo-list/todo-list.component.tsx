import React from "react";

import "./todo-list.css";

import { useSelector } from "react-redux";

import { TodoListReducer } from "../../types/todos.types";
import Todo from "../todo/todo.component";
import TodoCreator from "../todo-creator/todo-creator.component";

const TodoList = () => {
  const { todos } = useSelector(({ todoList }: TodoListReducer) => ({
    todos: todoList.items,
  }));

  const todoItems = todos.slice().reverse();
  return (
    <div className="main-page">
      <TodoCreator />
      {!!todoItems.length && (
        <div className="list-of-todos">
          {todoItems.map((item) => (
            <Todo item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
