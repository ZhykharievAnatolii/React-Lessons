// CORE
import { Component } from "react";
// STYLE
import "./style.css";

export class TodoItem extends Component {
  handlerChecked() {
    this.props.checkedTodo(this.props.id);
  }
  handlerDelete() {
    this.props.deleteTodo(this.props.id);
  }

  render() {
    return (
      <li className="todo-item">
        <label className="todo-item__label">
          <input
            type="checkbox"
            onChange={this.handlerChecked.bind(this)}
            defaultChecked={this.props.checked}
          />
          <p
            className={
              this.props.checked
                ? "todo-item__desc todo-item__desc--checked"
                : "todo-item__desc"
            }
          >
            {this.props.title}
          </p>
        </label>
        <button className="del_btn" onClick={this.handlerDelete.bind(this)}>Delete</button>
      </li>
    );
  }
}
