import React, { Component } from 'react';
import './style.css';
import Form from './Form'
class Res extends Component {
    state = {  }
    render() {
        return ( 
            <Form id={this.props.match.params.id}/>
         );
    }
}
 
export default Res;