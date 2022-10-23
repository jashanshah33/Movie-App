//import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
// import { configureStore, createStore } from "@reduxjs/toolkit";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import "./index.css";
import App from "./components/App";
import combineReducers from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";


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

// export const StoreContext = createContext(store);

// console.log(StoreContext);

// export class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

//const connectedAppComponent = connect(callBack)(App);

// export function connect(callBack) {
//   return function (Component) {
//     class ConnectComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }
//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callBack(state);
//         return (
//           <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
//         );
//       }
//     }
//     class WrapperConnectComponent extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => <ConnectComponent store={store} />}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return WrapperConnectComponent;
//   };
// }

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
