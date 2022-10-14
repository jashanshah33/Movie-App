import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
// import { configureStore, createStore } from "@reduxjs/toolkit";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import "./index.css";
import App from "./components/App";
import combineReducers from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log("Active_TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("Active_TYPE = ", action.type);
    }
    next(action);
  };

// const logger = ({ dispatch, getState }) => (next) => (action) => {
//   console.log("Active_TYPE = ", action.type);
//   next(action);
// };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//       return
//     }
//     next(action);
//   };

const store = createStore(combineReducers, applyMiddleware(logger, thunk));
// console.log(store);
// console.log(store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "don" }],
// });

// console.log(store.getState());

export const StoreContext = createContext(store);

console.log(StoreContext);

export class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  // </React.StrictMode>
);
