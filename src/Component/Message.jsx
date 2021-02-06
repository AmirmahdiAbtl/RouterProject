import React, { Component } from 'react';
import './style.css'
class Message extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={"massage"}>
                <h3>Please enter your Correct Food Name</h3>
                <ul className={"ui"}>
                    <li>you can search <span>names</span> of the food</li>
                    <li>you can search <span>recipes</span> of the food</li>
                </ul>
            </div>
         );
    }
}
 
export default Message;