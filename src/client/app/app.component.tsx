import React from 'react';
import './app.css';
import Todos from "../components/todos.component";
import { Provider } from "react-redux";
import { store } from './store/store';

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <Todos/>
      </div>
    </Provider>
  );
}

export default App;
