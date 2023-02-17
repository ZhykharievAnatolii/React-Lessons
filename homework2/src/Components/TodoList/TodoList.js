
import { Component } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import "./style.css";

export class TodoList extends Component {
  render() {
    const { todoItems } = this.props;
    return (
      <ul>
        {todoItems.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            title={todoItem.title}
          />
        ))}
      </ul>
    );
  }
}
