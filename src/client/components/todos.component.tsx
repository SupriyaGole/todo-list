import React from 'react';
import TodoHeader from './todo-header/todo-header.component';
import TodoList from "./todo-list/todo-list.component";

const Todos = () => {
  return (
    <div className='todos'>
      <TodoHeader />
      <TodoList />
    </div>
  );
};

export default Todos;