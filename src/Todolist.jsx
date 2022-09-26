
import {Component} from "React";
import "./Todolist.css";


class Todolist extends Component{
    constructor(props)
    render(){
        return <form >
            <h1 className="bg-info text-white" >Todo List</h1>
            <input type="text" placeholder="Add Some Text" />
            <button type="submit">Ajouter</button>
        </form>
    }
}

