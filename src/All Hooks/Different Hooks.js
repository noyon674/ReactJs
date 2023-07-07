import React, { Component, useState } from 'react'
import Home from './Home'
import Login from './Login'

class Hooks extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
      this.Decrement = this.Decrement.bind(this);
    }
    //when you use normal function
    handle(){
        this.setState({
            count: this.state.count + 1
        })
    }
    Decrement(){
        this.setState({
            count: this.state.count -1 
        })
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handle.bind(this)}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </div>
        )
    }
}

export default Hooks;
