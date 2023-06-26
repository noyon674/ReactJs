import React, {Component} from "react";

class onClick extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    //Increment function
    Increment = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    //decrement function
    Decrement = ()=>{
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        return(
            <div style={{textAlign:'center'}}>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.Increment}>+</button>&nbsp; &nbsp;
                <button onClick={this.Decrement} disabled = {this.state.count === 0 ? true : false}>-</button>
                 {/* when count is 0, decrement button will be disable */}
            </div>
        )
    }
}

export default onClick;
