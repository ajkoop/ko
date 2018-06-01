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
        <div className="mainstreet">
        <p className="App-intro">
          Hi, there. Welcome.</p> <p>I'm a database programmer and <a href="http://mediaschool.indiana.edu/profile/?p=koop">educator</a> in Bloomington, IN.</p>
        <h2>WORK<span className="orangish">work</span>WORK<span className="orangish">work</span>WORK</h2>
        <p>I studied to be a copywriter and wrote grants. I made <span className="ital">oh-so-many</span> websites.</p>
        <p>Today, I write data migration scripts for MCCSC &#8212; mostly in PowerShell. I work on account synchronization for education and productivity companies. Here are a few:</p>
        <ul>
          <li>Canvas</li>
          <li>Google</li>
          <li>Microsoft</li>
          <li>Apple</li>
          
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
