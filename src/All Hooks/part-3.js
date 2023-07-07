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
        let elemet;
        if(this.state.isLoggedIn){elemet = <Home />}
        else {elemet = <Login />}
        return(
            <div>
                {elemet}
            </div>
        )
    }
}

export default Hooks;
