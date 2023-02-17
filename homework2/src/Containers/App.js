// CORE
import { Component } from "react";
// COMPONENTS
import { TodoForm } from "../Components/TodoForm/TodoForm";
import { TodoList } from "../Components/TodoList/TodoList";
// STYLE
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
    };
  }

  addTodo({ id, title, checked }) {
    const { todoItems } = this.state;
    this.setState({
      todoItems: [...todoItems, { id, title, checked }],
    });
  }

  checkedTodo(id) {
    const { todoItems } = this.state;
    this.setState({
      todoItems: todoItems.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, checked: !todoItem.checked }
          : todoItem
      ),
    });
  }

  deleteTodo(id) {
    const { todoItems } = this.state;
    this.setState({
      todoItems: todoItems.filter((todoItem) => todoItem.id !== id),
    });
  }

  render() {
    return (
      <div className="container">
        <h1>TODO LIST</h1>
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <h2>Todos:</h2>
        <TodoList
          todoItems={this.state.todoItems}
          checkedTodo={this.checkedTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
