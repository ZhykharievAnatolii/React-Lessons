import "./App.css";
import React from "react";
import { Header, Nav, Main } from "./components/base-components";
import { TodoApp } from "./components/noteApp/noteApp";
export class App extends React.Component {
  render() {
    return <App />;
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Header />
          <Main />
          <Nav />
        </div>
        <div className="todo">
          <TodoApp />
        </div>
      </>
    );
  }
}
