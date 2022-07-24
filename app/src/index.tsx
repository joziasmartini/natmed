import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Global.sass";
import reportWebVitals from "./reportWebVitals";
import Symptoms from "./views/Symptoms/Symptoms";
import Login from "./views/Login/Login";
import Diagnosis from "./views/Diagnosis/Diagnosis";
import Loading from "./views/Loading/Loading";

// Animation library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ duration: 900 });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Loading or splash screen */}
        <Route path="/" element={<Loading />} /> 

        {/* Login screen with authentication */}
        <Route path="/login" element={<Login />} /> 

        {/* Screen where the user tell the symptoms */}
        <Route path="/symptoms" element={<Symptoms />} /> 

        {/* Where we show the processed diagnosis with diseases */}
        <Route path="/diagnosis" element={<Diagnosis />} /> 

        {/* Screen when the user selects the "know more" button on a disease card */}
        {/* <Route path="/details" element={<Details />} /> */}

        {/* Screen when the user selects the "treatment" button on a disease card */}
        {/* <Route path="/products" element={<Treatments />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
