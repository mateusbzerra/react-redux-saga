import { Provider } from "react-redux";
import store from "./store";
import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;
