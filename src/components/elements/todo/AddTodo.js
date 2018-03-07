import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItem: 'initialExampleItem' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleInputChange = e => {
    this.setState({
      todoItem: e.target.value
    });
  };

  handleSubmitClick = e => {
    e.preventDefault();
    if (!this.state.todoItem.trim()) {
      return;
    }
    this.props.dispatch(addTodo(this.state.todoItem));
    this.setState({ todoItem: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitClick}>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.todoItem}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
AddTodo = connect()(AddTodo);

export default AddTodo;
