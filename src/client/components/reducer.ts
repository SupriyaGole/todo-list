import {createSlice} from "@reduxjs/toolkit";

interface TodoItem {
  id: string;
  description: string;
  status: "COMPLETED" | "ADDED" | "EDITED"
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
    addTodo(state, action) {

    },
    updateTodo(state, action) {

    },
    deleteTodo(state, action) {

    }
  }
});

export default todoList.reducer;