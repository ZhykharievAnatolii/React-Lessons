import React, { Component } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

import "./TodoList.css";

class TodoList extends Component {
  state = {
    addTodoValue: "",
    todoList: [
      {
        title: "Smth very important",
        id: 1,
        done: false,
      },
      {
        title: "Another very important thing",
        id: 2,
        done: false,
      },
      {
        title: "Ordinary thing",
        id: 3,
        done: true,
      },
    ],
  };

  getTime() {
    let d = new Date();
    var n = d.getTime();
    console.log(n);

    return n;
  }

  handleDelete = (id) => {
    const filteredList = this.state.todoList.filter((t) => t.id !== id);
    this.setState({ todoList : filteredList });
  };

  handleDone = (todo) => {
    const todoList = [...this.state.todoList];
    todoList.map((t) => {
      if (t.id === todo.id) {
        t.done = !t.done;
      }
      return t;
    });
    this.setState({ todoList });
  };

  addNewTodo = (value) => {
    if (value) {
      this.setState({ addTodoValue: "", todoList:[...this.state.todoList, 
        {
        id:this.getTime(),
        title: value,
        done: false
      }]});
    } else {
      alert("Please Add Todo Text");
    }
  };

  render() {
    return (
      <div className="todo-main card px-3 col-md-8">
        <div className="card-body">
          <h3>ToDo List</h3>
          <AddTodo
            addTodo={this.addNewTodo}
            addValue={this.state.addTodoValue}
          />
          <div className="list-wrapper">
            <div className="d-flex flex-column todo-list">
              {this.state.todoList.map((todo) => (
                  <Todo
                    todo={todo}
                    delete={this.handleDelete}
                    doneDone={this.handleDone}
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
