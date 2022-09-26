import { Component } from "react";
import "./Team.css";
import Team1 from "./images/Team1.jpg";
import Team2 from "./images/Team2.jpg";
import Team3 from "./images/Team3.jpg";

class Team extends Component{
    render(){
        return(
<section className="Teams">
    <div className="container-fluid bg-white">
        <div className="text-center text-dark pt-3">
            <h4 id="text-light">Team</h4>
            <h2>Team Plan</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptatem. ipsum dolor sit amet.</p>
        </div>

        <div className="row gx-5">
            <div className="col-md-4">
              <div className="card mb-5 h-120">
                <div className="card-body">
                  <img src={Team1} className="img-fluid"  alt="team1"/>
                </div>
                <div className="card-footer bg-white">
                  <h3>Lorem, ipsum dolor.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-linkedin"></i></h3>
                  <h5 id="text-light">Lorem ipsum </h5>
                </div>
              </div>
               </div>
              <div className="col-md-4">
                <div className="card mb-5 h-120">
                  <div className="card-body">
                    <img className="img-fluid" src={Team2} alt="team2"/>
                  </div>
                  <div className="card-footer bg-white">
                    <h3>Lorem, ipsum dolor.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i className="bi bi-twitter"></i>
                      <i className="bi bi-linkedin"></i></h3>
                    <h5 id="text-light">Lorem ipsum </h5>
                  </div>
                </div>
                 </div>
                <div className="col-md-4">
                    <div className="card mb-5 h-120">
                      <div className="card-body">
                        <img className="img-fluid" src={Team3} alt="team3"/>
                      </div>
                      <div className="card-footer bg-white">
                        <h3>Lorem, ipsum dolor.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <i className="bi bi-twitter"></i>
                          <i className="bi bi-linkedin"></i></h3>
                        <h5 id="text-light">Lorem ipsum </h5>
                      </div>
                    </div>
               </div>
            </div>
             </div>
    </section>
        )  
    }
}
export default Team;