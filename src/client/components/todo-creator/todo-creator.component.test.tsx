import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { TodoStatus } from "../../types/todos.types";
import TodoCreator from "./todo-creator.component";

const mockUuid = "123456789";
jest.mock("react-uuid", () => {
  return () => mockUuid;
});
describe("Todo Creator", () => {
  const store = configureStore()({
    todoList: { items: [] },
  });

  const mockDate = new Date(2023, 1, 15);
  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(mockDate);

    render(
      <Provider store={store}>
        <TodoCreator />
      </Provider>
    );
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should add todo in the redux store on enter keypress", () => {
    const todoInput = screen.getByPlaceholderText("add your first todo task");
    userEvent.type(todoInput, "First task");
    userEvent.keyboard("{enter}");

    expect(store.getActions()[0]).toEqual({
      type: "todoList/addTodo",
      payload: {
        createdAt: mockDate.toString(),
        description: "First task",
        id: mockUuid,
        status: TodoStatus.ADDED,
      },
    });
  });

  it("should add todo in the redux store on click of add button", () => {
    const todoInput = screen.getByPlaceholderText("add your first todo task");
    userEvent.type(todoInput, "First task");

    const addTodoBtn = screen.getByTestId("addTodo");
    userEvent.click(addTodoBtn);

    expect(store.getActions()[0]).toEqual({
      type: "todoList/addTodo",
      payload: {
        createdAt: mockDate.toString(),
        description: "First task",
        id: mockUuid,
        status: TodoStatus.ADDED,
      },
    });
  });
});
