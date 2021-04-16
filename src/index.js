import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./pages/home";
import reportWebVitals from "./reportWebVitals";
import store from "@/config/rudex";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
