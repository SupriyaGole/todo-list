import React from "react";

import "./app.css";

import { Provider } from "react-redux";

import Todos from "../components/todos.component";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
