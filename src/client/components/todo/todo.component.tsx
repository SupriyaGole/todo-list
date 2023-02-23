import React from 'react';
import {TodoItem} from "../../types/todos.types";
import {DeleteOutlined} from '@material-ui/icons';
import {useDispatch} from "react-redux";
import {actions} from "../reducer";

const {deleteTodo} = actions;
const Todo = ({item}: {item: TodoItem}) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTodo(item.id));
  }

  return (
    <div className='todo'>
      <button className='delete-todo' onClick={deleteItem}>
        <DeleteOutlined />
      </button>
      <span>{item.description}</span>
    </div>
  );
};

export default Todo;