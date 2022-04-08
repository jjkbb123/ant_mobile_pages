import React, { Component } from "react";
import Nav from './Nav'
import Exam from './Exam'

export default class App extends Component {
  render() {
    return (
      <div className="app_container">
        <Nav />
        <Exam />
      </div>
    );
  }
}
