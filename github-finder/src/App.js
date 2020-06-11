import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/User";
import "./App.css";

class App extends Component {
  // Lifecycle method
  componentDidMount() {
    console.log(123)
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
