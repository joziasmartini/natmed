import React from "react";
import ReactDOM from "react-dom/client";
import { 
  BrowserRouter, 
  Routes,
  Route, 
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./Global.sass";
import Symptoms from "./views/Symptoms/Symptoms";
import Login from "./views/Login/Login";
import Diagnosis from "./views/Diagnosis/Diagnosis";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 900,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/symptoms" element={<Symptoms />} />
      <Route path="/diagnosis" element={<Diagnosis />} />

      {/* Route when the user selects a disease to know more about */}
      {/* <Route path="/details" element={<Details />} /> */}

      {/* Route when the user clicks on treatments on a detailed disease */}
      {/* <Route path="/products" element={<Products />} /> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
