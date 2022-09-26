import { Component } from "react";
import "./Ayro.css";
import Testi1 from "./images/Testi1.jpg";


class Ayro extends Component{
    render(){
        return(
            <section className="bg-light p-5">
            <div className="text-center text-dark">
                <h3><strong>Ayro</strong>UI</h3>
                 <p id="AyroP1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur ab tempore quidem tempora suscipit quia veritatis sint error expedita illum reiciendis aperiam, dolorem consequatur exercitationem autem tenetur veniam obcaecati, labore totam. Vero, assumenda ab consequuntur optio voluptatem necessitatibus dignissimos in doloribus ullam consectetur quibusdam voluptatum ipsa alias, cumque sapiente? ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi ullam quam iste nam, a labore tempora non cum recusandae?
                 </p>
            </div>
            <div className="text-dark text-center">
                <img className="rounded" src={Testi1} alt="testi1"/>
            <h3>Musharof Chowdhury</h3>
            <p id="AyroP2">CEO-Ayro UI</p>
            </div>
        </section>
    
        )
    }
}
export default Ayro;