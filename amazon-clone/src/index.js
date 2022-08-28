import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer, { initail } from "./components/reducer";
import { StateProvider } from "./components/stateProvider/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initail} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
reportWebVitals();
