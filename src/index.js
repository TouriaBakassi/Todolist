import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import Features from "./Features";
import Overview from "./Overview";
import User from "./User";
import Pricing from "./Pricing";
import Team from "./Team";
import Ayro from "./Ayro";
import Install from "./Install";
import FAQ from "./FAQ";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Features />
    <Overview />
    <User />
    <Pricing />
    <Team />
    <Ayro />
    <Install />
    <FAQ />
  </React.StrictMode>
);
