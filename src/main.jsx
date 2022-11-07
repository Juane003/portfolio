import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AboutMe } from "./Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-me" element={<AboutMe />} />
        {/* <Route path="/" element={<App />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
