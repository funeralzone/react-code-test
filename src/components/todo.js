import React from 'react';
import Completable from '../completable';

import styles from '../styles.scss';

class ToDo extends Completable {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={styles.todo}>
        <input type="checkbox" onChange={this.completeTodo} />
        <li className={styles.todoContent}>
          {this.props.value}
        </li>
      </li>
    )
  }
}

export default ToDo;
