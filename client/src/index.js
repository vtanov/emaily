// PRIMARY LOCATION FOR STARTING REDUX !!!!
// import the file for CSS. When file not js MUST specigy .css
// no need to specify relative path as well
// import materializeCSS from "materialize-CSS/dist/css/materialize.min.css";
// BUT do NOT need to specify the var materializeCSS, so sondense as:
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
//New instance of the Redux store
//               first arg to create store

// Action creators to monitor the app state: (inside src directrory)

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
//                   econd: initial state of the app
//                      this case empty object

// Starter place for app component
//   show the App component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
//        second arg is: from client/public folder. It's used to house
//                              the application. <div id="root"></div>
