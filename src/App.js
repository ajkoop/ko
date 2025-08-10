import React, { Component } from 'react';
import me from './koop.png';
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
          <span class="introzen">Hi, there.</span> <img src={me} /></p> <p>I'm a creative and passionate executive leader with a twenty-three year career in Information Technology spent writing, programming, teaching, and designing bent toward improving educational outcomes. </p>  <p>Here's what I'm up to professionally right now.</p>
        <h2 class="mccsc">Director of Technology - MCCSC</h2>
         <p>I have worked for the Monroe County Community School Corporation for the past nine years and am proud to support students learning via custom data-driven technology solutions.</p>
          
        
        <h2 class="iu">Adjunct Lecturer - Indiana University</h2>
  <p>I have been teaching <a href="https://koop.ws/V334/evaluation/testimonials.html">Building an Online Portfolio</a> within IU's Media School since 2013.</p>
  <h2 class="mccsc">Bloomington Digital Underground</h2>
        <p>I serve on the <a href="https://bloomington.in.gov/onboard/committees/10/members">city's commission</a> in order to assist in improving digital opportunity across the community.</p>
      </div>
      </div>

      
    );




  }
}

export default App;
