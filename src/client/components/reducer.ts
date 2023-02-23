import {createSlice} from "@reduxjs/toolkit";
import { TodoListState } from "../types/todos.types";

const initialState = {
  items: [],
} as TodoListState;

const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo(state, {payload}) {
      state.items.push(payload)
    },
    updateTodo(state, action) {

    },
    deleteTodo(state, {payload}) {
      const todosExceptDeletedTodo = state.items.filter((item) => item.id !== payload);
      state.items = todosExceptDeletedTodo;
    }
  }
});

export const {actions} = todoList;

export default todoList.reducer;