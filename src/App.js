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
          Hi, there. </p> <p>I'm a database programmer and educator.</p>
        <h2 class="mccsc">MCCSC</h2>
         <p>My daily programming efforts entail writing data migration scripts (primarily in Powershell and SQL) for the Monroe County Community School Corporation (MCCSC). I onboard, modify, and offboard  user accounts for vendors such as  
        
          Canvas,
          Google,
          Microsoft, and
          Apple</p>
          
        
        <h2 class="iu">Indiana University</h2>
  <p>I have been teaching online portfolio development within IU's Media School since 2013.</p>
        
      </div>
      </div>

      
    );




  }
}

export default App;
