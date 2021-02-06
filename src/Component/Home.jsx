import React, { Component } from 'react';
import './style.css';
import {Link ,Route ,Switch ,BrowserRouter as Router} from 'react-router-dom';
class Home extends Component {
    state = {  }
    render() { 
        return (   
                <div className={"Home"}>
                    <h1>Get a Recipes</h1>
                    <h3>Don't know what food to make? or You do not know how to cook that food properly</h3>
                    <p>Clike to Button and Search your food name or The food it has</p>
                    <Link to="/res"><button>Make Recipes</button></Link>
                </div>
        )
    }
}
 
export default Home;