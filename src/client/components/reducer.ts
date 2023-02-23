import { createSlice } from "@reduxjs/toolkit";

import { TodoListState } from "../types/todos.types";

const initialState = {
  items: [],
} as TodoListState;

const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.items.push(payload);
    },
    editTodos(state, { payload }) {
      state.items = payload;
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

export const { actions } = todoList;

export default todoList.reducer;
