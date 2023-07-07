import React, { Component, useState } from 'react'


class Hooks extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    //must be need to user ES6 function
    addValue = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addValue}>Increment</button>
            </div>
        );
    }
}

export default Hooks;
