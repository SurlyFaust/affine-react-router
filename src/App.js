import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Animals from './Components/Animals/Animals.js'
import Plants from './Components/Plants/Plants.js'
import Home from './Components/Home/Home.js'
import About from './Components/About/About';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>React Router Affine Lecture</h1>
       <Router>
         <div>
           <div id="navBar">
             <div className="navButton"><span><Link to="/" >Home</Link></span></div>
             <div className="navButton"><span><Link to="/plants" >Plants</Link></span></div>
             <div className="navButton"><span><Link to="/animals" >Animals</Link></span></div>
             <div className="navButton"><span><Link to="/about" >About</Link></span></div>
           </div>
          <Route exact path="/" component={ Home } />
          <Route path="/plants" component={ Plants }/>
          <Route path="/animals" component={ Animals }/>
          <Route path="/about" component={ About } />
         </div>
       </Router>
      </div>
    );
  }
}

export default App;
