import React, { Component } from 'react';
import logo from './logo.svg';
// import heado from './head.jpg
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
          Hi, there. </p> <p>I'm a full stack programmer that likes to teach. I've been in Ed Tech since 2003.</p>
        <h2 class="mccsc">Assistant Director of Technology - MCCSC</h2>
         <p>I lead software development and manage SIS and LMS vendor integrations.</p>
          
        
        <h2 class="iu">Adjunct Lecturer - Indiana University</h2>
  <p>I have been teaching online portfolio development within IU's Media School since 2013.</p>
        
      </div>
      </div>

      
    );




  }
}

export default App;
