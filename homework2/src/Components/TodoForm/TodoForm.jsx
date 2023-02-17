// CORE
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// STYLE
import "./style.css";

export class TodoForm extends Component {
  handlerSubmit(event) {
    event.preventDefault();
    const { addTodo } = this.props;
    addTodo({
      id: uuidv4(),
      title: event.target.title.value,
      checked: false,
    });
    event.target.reset();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handlerSubmit.bind(this)}>
        <input className="form__input" type="text" placeholder="New todo" name="title" />
        <button className="form__button">Add</button>
      </form>
    );
  }
}
