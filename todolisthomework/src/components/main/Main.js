import React, { Component } from "react";
import TodoList from "../list/TodoList";

import "./Main.css";


class Main extends Component {
  
  render() {
    return (
      <main className="main-content">
        <div className="container">
          <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              of letters, as opposed to using 'Content here, content here', making it look like readable English.
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
              and a search for 'lorem ipsum' will uncover
          </p>
          <TodoList />
        </div>
      </main>
    );
  }
}
export default Main;
