import React from "react";

import "./app.css";

import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Todos from "../components/todos.component";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Todos />
            </div>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
