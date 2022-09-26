import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Overview from "./Components/Overview";
import User from "./Components/User";
import Pricing from "./Components/Pricing";
import Team from "./Components/Team";
import Ayro from "./Components/Ayro";
import Install from "./Components/Install";
import FAQ from "./Components/FAQ";




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
