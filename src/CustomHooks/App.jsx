import React, { useEffect, useState } from 'react'
import useFetch from './Components/useFetch'

const App = () =>{
  const {data, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/users');

  const TodoElement = data && data.map((item)=>(
    <p key={item.id}>{item.name}</p>
  ));

  return (
    <div>
      {isLoading && <p>Please wait for data</p>}
      {error && <p>{error}</p>}
      {TodoElement}
    </div>
  )
}

export default App
