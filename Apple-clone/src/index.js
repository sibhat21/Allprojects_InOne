import React from "react";
import ReactDOM from "react-dom/client";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";
import "./Resource/CSS/header.css";
import "./Resource/CSS/footer.css";
import "./Resource/CSS/main.css";
import "./Resource/CSS/apple.css";
import './Components/product.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
