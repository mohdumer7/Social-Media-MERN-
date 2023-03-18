import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import { createRoot } from "react-dom/client";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// The store now has the ability to accept thunk functions in `dispatch`
export const store = createStore(reducers, composedEnhancer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
