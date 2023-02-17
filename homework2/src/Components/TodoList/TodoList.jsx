// CORE
import { Component } from "react";
// COMPONENTS
import { TodoItem } from "../TodoItem/TodoItem";
// STYLE
import "./style.css";

export class TodoList extends Component {
  render() {
    const { todoItems, checkedTodo, deleteTodo } = this.props;
    return (
      <ul>
        {todoItems.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            title={todoItem.title}
            checked={todoItem.checked}
            checkedTodo={checkedTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    );
  }
}
