import React, { Component } from "react";
import "./Overview.css";
import Image from "./images/Image1.png";

class Overview extends Component {
  render() {
    return (
      <div>
        <section className="bg-white">
          <div className="container-fluid row gx-lg-4 m-0 text-dark">
            <div className="col-lg-4 p-5  my-5 ms-5">
              <h2 className="mb-3">1,25,000 Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit aliquam est sapiente aut iusto deserunt quos asperiores
                excepturi expedita ullam. ipsum dolor sit amet consectetur
                adipisicing elit. Amet odit nemo enim consectetur, voluptatum
                suscipit! Omnis minima tempore laboriosam quae!
              </p>
              <a href="#" className=" btn btn-light text-white">
                Git Started
              </a>
            </div>
            <picture className="col-lg-7 p-5 ms-5 mb-5">
              <source srcset="img-fluid" type="svg" />
              <img src={Image} className="img-fluid" alt="img" />
            </picture>
          </div>
        </section>
        <section className="bg-white">
          <div className="container-fluid row gx-lg-4 m-0 text-dark">
            <picture className="col-lg-7 p-5 me-5 mb-5">
              <source srcset="img-fluid" type="svg" />
              <img src={Image} className="img-fluid" alt="img" />
            </picture>

            <div className="col-lg-4 p-5  my-5 me-5">
              <h2 className="mb-3">Seamless Lorem ipsum.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit aliquam est sapiente aut iusto deserunt quos asperiores
                excepturi expedita ullam. ipsum dolor sit amet consectetur
                adipisicing elit. Amet odit nemo enim consectetur, voluptatum
                suscipit! Omnis minima tempore laboriosam quae!
              </p>
              <a href="#" className=" btn btn-light text-white">
                Git Started
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Overview;