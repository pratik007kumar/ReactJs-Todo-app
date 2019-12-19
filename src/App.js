import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "this the task 1",
        status: 0,
      },
      {
        id: 3,
        title: "this the task 3",
        status: 0,
      },
      {
        id: 2,
        title: "this the task 2",
        status: 0,
      },
    ]
  }
  render() {
    return (
      <div className="App" >

        <Todos todos={this.state.todos}></Todos>

      </div>
    );
  }
}

export default App;
