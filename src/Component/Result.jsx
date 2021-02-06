import React, { Component } from 'react'
import './style.css'
class Result extends Component {
    constructor(){
        super();
        this.state={
            // data : this.props.data
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() { 
        return(
           <React.Fragment>
                <div className={"component col-md-6"}>
                    <h3 className={"title"}>{this.props.title}</h3>
                    {this.props.details.map(res=><p className={"details"}>{res}</p>)}
                    {/* <p className={"details"}>{this.props.details}</p> */}
                    <p className={"calories"}>calories : {this.props.calories}</p> 
                    <img src={this.props.image} className={"img"} alt=""/>
                </div>
           </React.Fragment>
        )

    }
}
export default Result;