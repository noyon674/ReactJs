import React from 'react'

const Child = (props)=>{
    const data = 'I am from child';
    //passing data from child to parent
    props.onChildData(data);
   return(
    <div>
        <p>{props.des}</p>
    </div>
   )
}

export default Child;
