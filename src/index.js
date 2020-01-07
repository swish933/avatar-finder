import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { thunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";
import App from "./containers/App";
import { searchUsers, requestRobots } from "./reducers";
import "tachyons";

const logger = createLogger();
const rootReducer = combineReducers({ searchUsers, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
