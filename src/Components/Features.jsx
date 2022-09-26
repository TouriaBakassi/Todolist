import React, { Component } from "react";
import "./Features.css";

class Features extends Component {
  render() {
    return (
      <section>
        <div className="container-fluid bg-light">
          <div className="text-center text-dark pt-3">
            <h4 id="text-light">{this.props.TETLE} </h4>
            <h2>{this.props.heading} </h2>
            <p>
             {this.props.Text}
            </p>
          </div>
          <div className="container-fluid gx-lg-1 row">
            <div className="col-md-4 ">
              <div className="card h-400 m-5 text-left text-dark bg-white">
                <div className="card-body">
                  <h3> {this.props.title} </h3>
                  <p>
                    {this.props.text}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 ">
              <div className="card h-400 m-5 text-left text-dark bg-white">
                <div className="card-body">
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis veniam adipisci deserunt amet iusto, expedita minus
                    sit rerum fugiat dolorum!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card h-400 m-5 text-left text-dark bg-white">
                <div className="card-body">
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis veniam adipisci deserunt amet iusto, expedita minus
                    sit rerum fugiat dolorum!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card h-400 m-5 text-left text-dark bg-white">
                <div className="card-body">
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis veniam adipisci deserunt amet iusto, expedita minus
                    sit rerum fugiat dolorum!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card h-400 m-5 text-left text-dark bg-white">
                <div className="card-body">
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis veniam adipisci deserunt amet iusto, expedita minus
                    sit rerum fugiat dolorum!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card h-400  m-5 text-left text-dark bg-white">
                <div className="card-body">
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis veniam adipisci deserunt amet iusto, expedita minus
                    sit rerum fugiat dolorum!
                  </p>
                </div>
              </div>
            </div>*/}
          </div> 
        </div>
      </section>
    );
  }
}
export default Features;