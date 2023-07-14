//import files
import React from 'react';

import Child from './Layout/child';


const App = ()=>{
  const data = 'I am from parent';
  const handleChild = (data)=>{
    console.log(data);
  }
  return(
    <Child des = {data} onChildData = {handleChild}/>
  )
}

export default App;