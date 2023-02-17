
import { Component } from "react";
import { TodoForm } from "../Components/TodoForm/TodoForm";
import { TodoList } from "../Components/TodoList/TodoList";
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

  render() {
    return (
      <div className="container">
        <h1>TODO LIST</h1>
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <h2>Todos:</h2>
        <TodoList
          todoItems={this.state.todoItems}
        />
      </div>
    );
  }
}

export default App;

