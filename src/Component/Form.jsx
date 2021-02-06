import '../App.css';
import React from 'react';
import Result from './Result';
import Message from './Message';
class Form extends React.PureComponent {
  constructor(){
    super();
    this.state = {
        APP_ID : "c643f10a",
        APP_KEY : "3d8aecddfe9b2fb599e18b44645d1c52",
        request : []
    };
    this.ref = React.createRef();
  }
  componentDidMount(){
    this.ref.current.focus();
  }
   subHandler = async (e) => {
    e.preventDefault();
    const val = e.target.children[0].value;
    const response = await fetch(`https://api.edamam.com/search?q=${val}&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}`);
    const request = await response.json();
    this.setState({request : request.hits});
  }
  render() {
    return (
        <div className={"content"}>
            <form className={"form"} onSubmit={this.subHandler}>
                <input className={"input"} type="text" ref={this.ref}/>
                <input className={"button"} type="submit" value="Submit"/>
            </form>
            { (this.state.request.length===0)?<Message/>:this.state.request.map(req=><Result 
                key={req.recipe.label} 
                title={req.recipe.label} 
                image={req.recipe.image} 
                calories={req.recipe.calories} 
                details={req.recipe.ingredientLines}/>)
            }
        </div>
    );
  }
}

export default Form;
