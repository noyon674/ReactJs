import React, { Component, useState } from 'react'
import Home from './Home'
import Login from './Login'

class Hooks extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    render(){
        return(
            <div>
                {this.state.isLoggedIn ? <Home /> : <Login />}
            </div>
        )
    }
}

export default Hooks;
