import React, {Component} from "react";

class onClick extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name: ''
      }
      ////second way to binding
      this.Decrement = this.Decrement.bind(this)
    }
    ///////////////// If we don't use ES6 function then we need to bind the value
    //Increment function
    Increment(){
        ///First way to binding
        this.setState({
            count: this.state.count + 1
        })
    }

    //decrement function
    Decrement(){
        
        this.setState({
            count: this.state.count - 1
        })
    }

    ///onchange function
    onChange = (e)=>{
        this.setState({
            name: e.target.value
        })
        console.log(e.target.value)
    }
    render(){
        return(
            <div style={{textAlign:'center'}}>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.Increment.bind(this)}>+</button>&nbsp; &nbsp;
                <button onClick={this.Decrement} disabled = {this.state.count === 0 ? true : false}>-</button> <br/> <br/>

                <label>Type your Name: </label>
                <input type="text" onChange={this.onChange} placeholder="Type name"/> <br/>
                <h3>Output: {this.state.name}</h3>

                 {/* when count is 0, decrement button will be disable */}
            </div>
        )
    }
}

export default onClick;
