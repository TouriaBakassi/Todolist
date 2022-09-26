import React, {Component} from 'react';
import './Home.css';
import Phone from "./images/Phone.png";

class Home extends Component{
render(){
    return(
        
            <section  id="parti1">
        <div className="container-fluid row m-0 gx-lg-4">
          <div className="col-lg-7 p-5 my-5 text-white">
            <h2>A Pawrful App For Your Business</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
              laborum., ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#"  className="btn btn-white text-center" id="textlight">
              App Store
            </a>
            <a href="#" className="btn btn-light text-white text-center">
               Google Play
              </a>
          </div>
          <div className="col-lg-5 p-5">
            <img src={Phone} className="img-fluid" alt="phone"/>
        </div>
         </div>
    </section>
        
    )
}
}
export default Home;
