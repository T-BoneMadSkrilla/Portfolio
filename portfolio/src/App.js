import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import Nav from './components/nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router className="App">
      <div> 
       <Nav/>
       {routes}
      </div>
      </Router>
    );
  }
}

export default App;
