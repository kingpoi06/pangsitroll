import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://36.88.12.26:5000";
// axios.defaults.baseURL = "https://akusehat-api-rivopncpgq-et.a.run.app";
axios.defaults.baseURL = "https://api-geoheritage.onrender.com";
// axios.defaults.baseURL = "http://localhost:5000";
// axios.defaults.baseURL = "https://be-isena-fktp.onrender.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
