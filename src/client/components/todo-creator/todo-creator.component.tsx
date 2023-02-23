import React, { useState } from 'react';
import  './todo-creator.css';
import {useDispatch} from "react-redux";
import {actions} from '../reducer';
import uuid from 'react-uuid';

const {addTodo} = actions;
const TodoCreator = () => {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState('');

  const addTodoToList = () => {
    dispatch(addTodo({
      id: uuid(),
      description: todoText,
      status: 'ADDED',
      createdAt: new Date(),
    }));
    setTodoText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter') {
      addTodoToList();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  }

  return (
    <div className='todo-creator'>
      <input type="text" placeholder='add your todo task' id='todo-input'
             value={todoText} onKeyDown={handleKeyDown} onChange={handleChange} />
      <button className='add-todo' onClick={addTodoToList} />
    </div>
  );
};

export default TodoCreator;