import { Component } from "react";
import "./Todolist.css";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        content: "",
        id: 0,
        done: false,
      },
      list: [],
      alert: false,
    };
    this.handlechange = this.handlechange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlechange(e) {
    console.log(e.target.value);
    this.setState({ task: { content: e.target.value } });
  }
  handlesubmit(e) {
    e.preventDefault();

    let { task, list: tasklist } = this.state;
    let IDI = Math.random() * 1000 + "_" + new Date().getTime();
    task.id = IDI;
    task.done=false;

    if (task.content.trim().length !== 0) {
      // recuperer le table
      // let table = this.state.list;
      // Ajouter la valeur saisie dans le table avec la fonction push
      tasklist.push(task);
      // Mettre a jour le state
      this.setState({ list: tasklist });
      // Vider le champ (input)
      this.setState({ task: { content: "" } });
    } else {
      this.setState({ alert: true });
    }
  }

  handledelet = (index) => {
    let { list: tasklist } = this.state;
    tasklist.splice(index, 1);
    this.setState({ list: tasklist });
  };

  handleDone = (id) => {
    // let {task}=this.state
    // let IDI= Math.random()*1000+"_"+new Date().getTime();
    //  task.id = IDI;
    let { list: tasklist } = this.state;

    tasklist = tasklist.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState({ list: tasklist });
  };

  render() {
    let { list } = this.state;
    if (this.state.alert == true) {
      setTimeout(() => {
        this.setState({ alert: false });
      }, 5000);
    }
    return (
      <>
        {this.state.alert === true ? (
          <div className="alert alert-danger text-center mx-5" role="alert">
            <p>Saisisez une valeur dans le champ!</p>
          </div>
        ) : (
          ""
        )}

        <form
          className=" bg-info text-center mx-5 rounded-3 my-5"
          onSubmit={this.handlesubmit}
        >
          <h1 className="bg-info text-white mb-5">Todo List</h1>
          <input
            className="form-control p-3"
            onChange={this.handlechange}
            type="text"
            placeholder="Add Some Text"
            value={this.state.task.content}
          />
          <button
            className="bg-danger text-info rounded-3 px-5 py-3 my-5"
            type="submit"
          >
            Ajouter
          </button>
        </form>
        <ul className="my-3 text-center">
          {list.map((item, index) => {
            return (
              <li className="text-info" key={index}>
                <span
                  className={
                    item.done
                      ? "fw-bold text-decoration-line-through"
                      : "fw-bold"
                  }
                  style={
                    item.done === true ? { textDecoration: "line-thougth" } : {}
                  }
                >
                  {item.content}
                </span>
                <button
                  className="bg-danger text-info rounded-3 px-5 mx-5"
                  title="delete"
                  onClick={() => {
                    this.handledelet(index);
                  }}
                >
                  delete
                </button>
                <input
                  onChange={() => {
                    this.handleDone(item.id);
                  }}
                  className="form-check-input"
                  checked={item.done === true ? true : false}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                ></input>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Todolist;
