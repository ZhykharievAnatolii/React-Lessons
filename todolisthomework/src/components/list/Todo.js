import React, { Component } from "react";
class Todo extends Component {
  render() {
    return (
      <div className="todo-item" key={this.props.todo.id}>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input me-2"
            type="checkbox"
            defaultChecked={this.props.todo.done}
            onChange={() => this.props.doneDone(this.props.todo)}
          />
        </div>
        <div className="item-text-b d-flex flex-row justify-content-between">
          <div>
          <span className={this.props.todo.done ? "completed" : "uncompleted"} >{this.props.todo.title}</span>
          </div>
          <div className="text-center">
            <button
              className="btn btn-danger font-weight-bold "
              onClick={() => this.props.delete(this.props.todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

}
export default Todo;
