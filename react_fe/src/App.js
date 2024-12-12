import React, { Component } from "react";
// import logo from "./dbs-logo2.png";
import "./App.css";
import Login from "./Component/login"
import AddExpenses from "./Component/AddExpenses";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login displaytext="Login Screen"/>
        <AddExpenses />
      </div>
);
  }
}
export default App;