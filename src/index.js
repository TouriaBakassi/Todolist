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




// State TP
class State extends Component{
  constructor(props){
    super(props);
    this.state={
      nom:"Touria",
      Prenom: "Bakassi",
      count:0
    }
  }
  render(){
    // this.setState({nom:"Maryam", Prenom:"BBAKASSI"});
    // let color="black";
    // if (this.state.count>0 && this.state.count<=10) {
    //   color="green"
    // }else if (this.state.count<0) {
    //   color="blue"
    // }else if (this.state.count>10) {
    //   color="red"
    // }
    
let cl="redcolor";
let {count}= this.state

    if (count>0 && count<=10) {
      cl="redcolor";
    }else if (count<0) {
      cl="greencolor";
    }else if (count>10) {
      cl="bluecolor";
    }


    return <div>
     <h2  >Counter: <span className={cl}>{this.state.count} </span></h2>
      {/* <h2  style={this.state.count<0?{color:"red"}:{color:"green"}}>Counter: <span >{this.state.count} </span></h2> */}
<button onClick={()=>{
  let C = this.state.count;
  C++;
  this.setState({count:C})
}}>Increment</button>

<button onClick={()=>{
  let A = this.state.count;
  A=0;
  
  this.setState({count:0})
}}>Reset</button>


<button onClick={()=>{
  let B = this.state.count;
  B--;
  this.setState({count:B})
}}>Decrement</button>



      {/* <h2>Hello My name is {this.state.nom} {this.state.Prenom} </h2> */}
      {/* <StateCH name="Hiba"/> */}
      
    </div>
  }
}





 class StateCH extends Component{
  render(){
    return ( <h2>{this.props.name}</h2>
       )
  }
 }











const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>

    <State />
    {/* <Navbar />
    <Home />
    <Features
    TETLE="Features"
    heading="lorem lorem lorem lorem lorem lorem"
      title="Hello world 1"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis veniam adipisci deserunt amet iusto, expedita minus
                    sit rerum fugiat dolorum!1"
    />
    <Features
      title="Hello world 2"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis veniam adipisci deserunt amet iusto, expedita minus
                    sit rerum fugiat dolorum!2"
    />
    <Overview />
    <User />
    <Pricing />
    <Team />
    <Ayro />
    <Install />
    <FAQ /> */}
  </React.StrictMode>
);
