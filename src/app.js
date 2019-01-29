import React, { Component } from 'react';

import ToDoList from './components/todoList';
import styles from './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div>
      <h2 className={styles.title}>Here is my To Do list for today</h2>
      <ToDoList />
    </div>;
  }
}

export default App;
