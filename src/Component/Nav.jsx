import React, { Component } from 'react';
import './style.css';
import {Link ,Route ,Switch ,BrowserRouter as Router} from 'react-router-dom';
class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={"nav"}>
                <h2 className="title">Resepies</h2>
                <div className="nav-bar">
                    <ul className="item">
                        
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/about">
                            <li>About</li>
                        </Link>
                        <Link to="/res">
                            <li>Res</li>
                        </Link>
                        
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default Nav;