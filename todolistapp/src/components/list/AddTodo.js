import React, { Component } from "react";

class TodoList extends Component {
  state = {
    defaultValue: "",
    value: this.props.addTodoValue,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };


  addTodo = () => {
    this.props.addTodo(this.state.value);
  };

  render() {
    return (
      <div className="add-items">
        <div className="input-item">
          <input
            type="text"
            className="form-control"
            id="todoValue"
            placeholder="ToDo"
            onChange={this.handleChange}
          />

          <button
            onClick={this.addTodo}
            className="add btn btn-primary font-weight-bold todo-list-add-btn"
            type="button"
            id="button-addon2"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;
