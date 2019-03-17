import React, { Component } from 'react';
import logo from './logo.svg';
// import plural from './pluralsight.png';
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
          Hi, there. </p> <p>I'm a database programmer and Adjunct Lecturer with IU's Media School.</p>
        <h2>wOr<span class="obnox">k</span></h2>
         <p>My programming efforts entail writing data migration scripts for the Monroe County Community School Corporation (MCCSC). I sync our user accounts for vendors such as </p> 
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
