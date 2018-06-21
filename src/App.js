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
          Hi, there. Welcome.</p> <p>I'm a database programmer and <a href="http://mediaschool.indiana.edu/profile/?p=koop">educator</a> in Bloomington, IN.</p>
        <h2>wOrK</h2>
        <p>I studied to be a copywriter and wrote grant and made <span className="ital">oh-so-many</span> websites.</p>
        <p>Today, I write data migration scripts for MCCSC. I sync our user accounts for vendors such as </p> 
        <ul>
          <li>Canvas</li>
          <li>Google</li>
          <li>Microsoft</li>
          <li>Apple</li>
          
        </ul>
        <h2>gRoWtH</h2>
<p>I love to learn new languages. Check my <a href="https://app.pluralsight.com/profile/koop">latest stats</a> (if you are into stats)!</p>

        
      </div>
      </div>

      
    );




  }
}

export default App;