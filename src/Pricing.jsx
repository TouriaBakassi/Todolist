import { Component } from "react";
import "./Pricing.css";


class Pricing extends Component{
    render(){
        return(
            <section className="Pricing">
<div className="container-fluid bg-light">
    <div className="text-center text-dark pt-3">
        <h4 id="text-light">Pricing</h4>
        <h2>Pricing Plan</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptatem. ipsum dolor sit amet.</p>
    </div>
    <div className="row gx-5">
        <div className="col-md-3">
          <div className="card bg-white mb-5 h-120">
            <div className="card-body">
              <h4 className="card-titre ">Hoppy</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor
                sit amet. ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate.
              </p>
              <h3 className="card-titre fs-3"><strong>$12</strong>/mo</h3>
              <a href="#" className="btn btn-dark text-white w-50">Buy Hoppy</a>
            </div>
            <div className="card-footer bg-white">
              <h4 className="card-titre">WHAT'S INCLUDED</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
            <div className="card bg-white mb-5 h-120">
              <div className="card-body">
                <h4 className="card-titre ">Freelancer</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor
                  sit amet. ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate.
                </p>
                <h3 className="card-titre fs-3"><strong>$24</strong>/mo</h3>
                <a href="#" className="btn btn-dark text-white w-50">Buy Freelancer</a>
              </div>
              <div className="card-footer bg-white">
                <h4 className="card-titre">WHAT'S INCLUDED</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-white mb-5 h-120">
              <div className="card-body">
                <h4 className="card-titre ">Startup</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor
                  sit amet. ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate.
                </p>
                <h3 className="card-titre fs-3"><strong>$32</strong>/mo</h3>
                <a href="#" className="btn btn-dark text-white w-50">Buy Startup</a>
              </div>
              <div className="card-footer bg-white">
                <h4 className="card-titre">WHAT'S INCLUDED</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-white mb-5 h-120">
              <div className="card-body">
                <h4 className="card-titre ">Enterprise</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor
                  sit amet. ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate.
                </p>
                <h3 className="card-titre fs-3"><strong>$48</strong>/mo</h3>
                <a href="#" className="btn btn-dark text-white w-50">Buy Enterprise</a>
              </div>
              <div className="card-footer bg-white">
                <h4 className="card-titre">WHAT'S INCLUDED</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
           </div>
</div>
 </section>
        )
    }
}
export default Pricing;