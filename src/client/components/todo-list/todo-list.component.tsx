import React from 'react';
import { useSelector } from 'react-redux';
import { TodoListReducer } from '../../types/todos.types';
import TodoCreator from "../todo-creator/todo-creator.component";

const TodoList = () => {
  const {todos} = useSelector(({todoList}: TodoListReducer) => ({
    todos: todoList.items
  }));

  return (
    <div>
      <TodoCreator />
      <div className='list-of-todos'>
        {todos.map((item) => <p>{item.description}</p>)}
      </div>
    </div>
  );
};

export default TodoList;