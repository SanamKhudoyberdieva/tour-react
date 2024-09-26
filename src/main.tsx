import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "react-toastify/dist/ReactToastify.css";
import "./assets/fonts/stylesheet.css";
import "./assets/css/core.css";
import "./assets/css/theme-default.css";
import "./assets/css/demo.css";
import "./assets/css/custom.css";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
