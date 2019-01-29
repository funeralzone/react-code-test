import React, { Component } from 'react';

class Completable extends Component {
  constructor(props) {
    super(props);
  }

  completeTodo = () => {
    this.props.completeTodo(this.props.index);
  }
}

export default Completable;
