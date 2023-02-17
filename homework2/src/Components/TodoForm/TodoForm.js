
import { Component } from "react";
import "./style.css";

const { v4: uuidv4 } = require('uuid');
uuidv4();

export class TodoForm extends Component {
  submit(event) {
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
      <form className="form" onSubmit={this.submit.bind(this)}>
        <input className="form__input" type="text" placeholder="New todo" name="title" />
        <button className="form__button">Add</button>
      </form>
    );
  }
}
