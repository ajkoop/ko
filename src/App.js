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
          Welcome to my tiny site.</p> <p>I'm a database programmer and educator.</p> <p> I live in a green little place called Bloomington, IN.</p>
        <h2>My Work</h2>
        <p>I studied to be a copywriter and wrote grants. Then, I made a great many websites.</p>
        <p>These days, I write data integration Powershell scripts for Microsoft, Google, Apple Classroom, and any other apps the kids need their paws on.</p>
      </div>
    );
  }
}

export default App;
