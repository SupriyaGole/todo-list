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

  return (
    <div className="main-page">
      <TodoCreator />
      <div className="list-of-todos">
        {todos
          .slice()
          .reverse()
          .map((item) => (
            <Todo item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
