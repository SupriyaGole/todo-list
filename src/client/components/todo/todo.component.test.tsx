import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { TodoStatus } from "../../types/todos.types";
import Todo from "./todo.component";

describe("Todo", () => {
  const date = new Date(2023, 1, 15);
  const uuid1 = "123456789";
  const uuid2 = "823456788";
  const firstTodo = {
    id: uuid1,
    description: "First task",
    createdAt: date.toString(),
    updatedAt: "",
    status: TodoStatus.ADDED,
  };
  const todos = [
    firstTodo,
    {
      id: uuid2,
      description: "Second task",
      createdAt: date.toString(),
      updatedAt: "",
      status: TodoStatus.ADDED,
    },
  ];
  let store;

  const mockDate = new Date(2023, 1, 15);
  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(mockDate);
    store = configureStore()({
      todoList: {
        items: todos,
      },
    });
    render(
      <Provider store={store}>
        <Todo item={firstTodo} />
      </Provider>
    );
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should delete a todo", () => {
    const deleteTodoBtn = screen.getByTestId("deleteTodo");
    userEvent.click(deleteTodoBtn);

    expect(store.getActions()[0]).toEqual({
      payload: "123456789",
      type: "todoList/deleteTodo",
    });
  });

  it("should edit a todo", () => {
    const editTodoBtn = screen.getByTestId("editTodo");
    userEvent.click(editTodoBtn);

    const editTodoInput = screen.getByPlaceholderText("edit your todo task");
    fireEvent.change(editTodoInput, { target: { value: "" } });
    userEvent.type(editTodoInput, "Edited description");
    userEvent.keyboard("{enter}");

    expect(store.getActions()[0]).toEqual({
      payload: [
        {
          ...firstTodo,
          description: "Edited description",
          status: TodoStatus.EDITED,
          updatedAt: mockDate.toString(),
        },
        todos[1],
      ],
      type: "todoList/editTodos",
    });
  });
});
