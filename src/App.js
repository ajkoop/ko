import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Andrew Koop</h1>
        </header>
        <p className="App-intro">
          Hi, there.</p> <p>I'm a database programmer and <a href="http://mediaschool.indiana.edu/profile/?p=koop">educator</a> in Bloomington, IN.</p>
        <h2>My Work</h2>
        <p>I studied to be a copywriter and wrote grants. Then, I made websites.</p>
        <p>Today, I write data integration Powershell scripts for Microsoft, Google, Apple Classroom, and any other apps the kids need their paws on.</p>
      </div>
    );
  }
}

export default App;
