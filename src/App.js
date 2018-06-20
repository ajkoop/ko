import React, { Component } from 'react';
import logo from './logo.svg';
import plural from './pluralsight.jpg';
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
        <p>Today, I write data migration scripts for MCCSC mostly using combinations of SQL and PowerShell. I work on student and staff account synchronization for education and productivity companies such as </p> 
        <ul>
          <li>Canvas</li>
          <li>Google</li>
          <li>Microsoft</li>
          <li>Apple</li>
          
        </ul>
<p><a href="https://app.pluralsight.com/profile/koop"><img src={plural} alt="pluralsight" /></a></p>
        
      </div>
      </div>

      
    );




  }
}

export default App;