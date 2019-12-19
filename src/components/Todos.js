import React, { Component } from 'react'

export class Todos extends Component {
    render() {
        return (
            this.props.todos.map((todo) => (
                <h1>{todo.title}</h1>
            ))
        )
    }
}

export default Todos
