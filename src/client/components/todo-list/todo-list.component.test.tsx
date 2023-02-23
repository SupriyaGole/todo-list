import React from "react";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { TodoStatus } from "../../types/todos.types";
import TodoList from "./todo-list.component";

describe("Todo List", () => {
  const date = new Date(2023, 1, 15);
  const uuid1 = "123456789";
  const uuid2 = "823456788";
  const store = configureStore()({
    todoList: {
      items: [
        {
          id: uuid1,
          description: "First task",
          createdAt: date.toString(),
          updatedAt: "",
          status: TodoStatus.ADDED,
        },
        {
          id: uuid2,
          description: "Second task",
          createdAt: date.toString(),
          updatedAt: "",
          status: TodoStatus.ADDED,
        },
      ],
    },
  });

  it("should render list of todos", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
