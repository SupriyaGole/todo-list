import {createSlice} from "@reduxjs/toolkit";

interface TodoItem {
  id: number;
  description: string;
  status: "COMPLETED" | "ADDED" | "EDITED";
  createdAt: Date;
  updatedAt?: Date;
}

interface TodoListState {
  items: TodoItem[]
}

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
    deleteTodo(state, action) {

    }
  }
});

export const {actions} = todoList;

export default todoList.reducer;