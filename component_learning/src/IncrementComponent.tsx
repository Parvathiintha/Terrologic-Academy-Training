import React from 'react'
import { useState} from 'react'
const Counter = () => {
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
        const decrement =()=>{
            // setCount(Math.max(0,count-1));
             setCount(count>0?count-1:count);
        }
        const reset= ()=>{
            setCount(0)
        }
    
  return (
    <div>
      <p>count:{count}</p>
      <button onClick ={increment}>Increment</button>
      <button onClick ={decrement}>Decrement</button>
      <button onClick ={reset}>Reset</button>

    </div>
  )
}

export default Counter
