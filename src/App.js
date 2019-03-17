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
        <h2 class="mccsc">MCCSC</h2>
         <p>My daily programming efforts entail writing data migration scripts (primarily in Powershell and SQL) for the Monroe County Community School Corporation (MCCSC). I sync our user accounts for vendors such as </p> 
        <ul>
          <li>Canvas</li>
          <li>Google</li>
          <li>Microsoft</li>
          <li>Apple</li>
          
        </ul>
        <h2 class="iu">Indiana University</h2>
  <p>I have been teaching online portfolio devlopment within IU's Media School since 2013.</p>
        
      </div>
      </div>

      
    );




  }
}

export default App;
