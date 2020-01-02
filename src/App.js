import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "this the task 1",
        status: true
      },
      {
        id: 3,
        title: "this the task 3",
        status: false
      },
      {
        id: 2,
        title: "this the task 2",
        status: false
      }
    ]
  };
  updateTodo = (id) => {
    this.setState({
      todos:this.state.todos.map(todo=>{
        if(todo.id===id){
          todo.status=!todo.status;
        }
        return todo;
    })
  })
  console.log(id);

  };

  deleteTodo = (id) => {
    this.setState({
      todos:[... this.state.todos.filter(todo=> todo.id!==id)]
    })
 


  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}
        updateTodo={this.updateTodo}
        deleteTodo={this.deleteTodo}
        ></Todos>

      </div>
    );
  }
}

export default App;
