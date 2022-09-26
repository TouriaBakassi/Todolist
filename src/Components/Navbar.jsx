import React, { Component } from "react";
import "../Components/Navbar.css";
import Logo from "./images/Logo.svg";


class Navbar extends React.Component{
    render(){
        return(
            
            <nav className="container-fluid navbar navbar-expand navbar-light bg-white">
        <a href="#" className="navbar navbar-brand px-5">
            <img
              src={Logo}
              type="svg"
              alt="logo"
              className="img-fluid"
            />
          </a>
          <div className="navbar-collapse collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item me-3"><a className="nav-link text-dark" href="#">home</a></li>
              <li className="nav-item me-3"><a className="nav-link text-dark" href="#">Features</a></li>
              <li className="nav-item me-3"><a className="nav-link text-dark" href="#">Overview</a></li>
              <li className="nav-item me-3"><a className="nav-link text-dark" href="#">Pricing</a></li>
              <li className="nav-item me-3"><a className="nav-link text-dark" href="#">Team</a></li>
              <li className="nav-item me-3"><a className="nav-link text-dark" href="#">Blog</a></li>
              <li className="nav-item me-3"><a className="nav-link text-dark" href="#">Contact</a></li>
            </ul>
          </div>
          <button
          className="btn btn-light text-white p-2 me-5"
          type="button"
          
        >Git It Now</button>
        </nav>
            
        )
    }
}
export default Navbar;