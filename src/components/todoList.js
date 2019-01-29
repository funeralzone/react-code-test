import React, { Component } from 'react';
import ToDo from '../components/todo';

import styles from '../src/styles.scss';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Finish this test'],
      newTodo: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: '',
    });
  }

  completeTodo = (index) => {
    this.state.todos.splice(index, 1)
  }

  render() {
    const { todos, newTodo } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.controls}>
          <input type="text" value={newTodo} onChange={this.handleChange} />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul className={styles.list}>
          {todos.map((todo, index) => <ToDo value={todo} index={index} completeTodo={this.completeTodo}></ToDo>)}
        </ul>
      </div>

    )
  }
}

export default ToDoList;
