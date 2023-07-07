import React, { Component, useState } from 'react'


class Hooks extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         isTrue: false
      }
    }
    render(){
        if(this.state.isTrue) return 'Yeah, It is true'
        else return 'No, It is Wrong'
    }
}

export default Hooks;
