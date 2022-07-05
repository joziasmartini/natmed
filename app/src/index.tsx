import React from "react";
import ReactDOM from "react-dom/client";
import { 
  BrowserRouter, 
  Routes,
  Route, 
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./Global.sass";
import Search from "./views/Search/Search";
import Login from "./views/Login/Login";
import Diagnosis from "./views/Diagnosis/Diagnosis";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/diagnosis" element={<Diagnosis />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
