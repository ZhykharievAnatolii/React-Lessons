import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { Nav} from "./Components/Nav/Nav";
import { TodoApp } from "./Components/noteApp/noteApp";
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
