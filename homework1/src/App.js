import "./App.css";
import React from "react";
import { Header, Nav, Main } from "./components/base-components";
export class App extends React.Component {
  render() {
    return <Bootstrap />;
  }
}

class Bootstrap extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Nav />
      </div>
    );
  }
}
