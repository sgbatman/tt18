import React, { Component } from "react";
// import logo from "./dbs-logo2.png";
import "./App.css";
import Login from "./Component/login"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login displaytext="Login Screen"/>
      </div>
);
  }
}
export default App;