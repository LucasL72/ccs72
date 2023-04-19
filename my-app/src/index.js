import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider context={helmetContext}>
    <Provider store={store}>
      <App />
    </Provider>
  </HelmetProvider>
);
reportWebVitals();
