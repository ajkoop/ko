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
          <p>Welcome to my tiny site.</p> <p>I'm a database programmer and educator in a green little place called Bloomington, Indiana.</p>
        </p>
      </div>
    );
  }
}

export default App;
