import React, { Component } from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    const Index = () => <h2>Home</h2>;
    const About = () => <h2>About</h2>;
      return (
        <Router>
          <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
            <Route path="/" exact component = {Index} />
            <Route path="/about/" component = {About} />
          </div>
        </Router>  
      ); 
  }
}

export default App;
