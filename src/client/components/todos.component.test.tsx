import React from "react";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../app/store/store";
import Todos from "./todos.component";

describe("Todos", () => {
  it("should render a component", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
