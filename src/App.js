import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Nav from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Res from './Component/Res';
import {Link ,Route ,Switch ,BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render() { 
    return (
        <div className={'app'}>
        
          <Router>
            <Nav/>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/res" exact component={Res}/>
            <Route path="/res/:id" component={Res}/>
          </Router>
        </div>
    );
  }
}

export default App;