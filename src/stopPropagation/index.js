import React, { Component, useState } from 'react'

const Hooks=()=>{
    const handlerchild = (event)=>{
        console.log("child", event);
        event.stopPropagation();
    }
    const hadparent = (event)=>{
        console.log('parent', event)
    }
        return(
            <div onClick={hadparent}>
                <h1>welcome</h1>
                <button onClick={handlerchild}>Button</button>
            </div>
        )
}

export default Hooks;
