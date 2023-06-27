import React, { useState } from 'react';

const Hooks = ()=>{
    const [count, setcount] = useState(0);
    return(
        <div>
            <h1>count: {count}</h1>
            <button onClick={()=>{setcount(count+1)}}>Increment</button>
            <button onClick={()=>{setcount(count-1)}} disabled={count===0? true: false}>Decrement</button>
        </div>
    );
};

export default Hooks;
