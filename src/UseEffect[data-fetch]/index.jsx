import react, { useEffect, useState } from 'react';

const App = ()=>{

  const [todos, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(null);

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
      if(!res.ok){
        throw Error('Error is coming');
      }
      return res.json();
    })
    .then((data)=>{
      setTodo(data);
      setIsLoading(false);
      setError(null)
    })
    .catch((error)=>{
      setError(error.message);
      setIsLoading(false);
    })

  }, []);

  const todoElement = todos && todos.map((item)=>{
    return <p key={item.id}>{item.title}</p>
  });

  return <div>
    {Error && <p>{Error}</p>}
    {isLoading && <p>Wait for data</p>}
    {todoElement}
  </div>
};

export default App;
