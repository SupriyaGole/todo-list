import { configureStore } from "@reduxjs/toolkit";

import todoList from "../../components/reducer";

export const store = configureStore({
  reducer: {
    todoList: todoList,
  },
});
