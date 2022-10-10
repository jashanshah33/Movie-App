import React from "react";
import ReactDOM from "react-dom/client";
// import { configureStore, createStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";
import "./index.css";
import App from "./components/App";
import movies from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(movies);
console.log(store);
// console.log(store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "don" }],
// });

// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    <App store={store} />
  </Router>
  // </React.StrictMode>
);
