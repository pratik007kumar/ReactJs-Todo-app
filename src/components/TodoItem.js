import React, { Component } from "react";

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#eee",
      padding:"10px",
      textDecoration: this.props.todo.status ? "line-through" : "none"
    };
  };
  render() {
    const {id,title}=this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          checked={this.props.todo.status}
          onChange={this.props.updateTodo.bind(this, id)}
        />{" "}
        {title}{" "}
      </div>
    );
  }
}
