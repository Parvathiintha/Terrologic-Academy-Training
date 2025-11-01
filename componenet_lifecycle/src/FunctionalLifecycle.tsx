import React, {useState,useEffect}  from 'react'


const FunctionalLifecycle : React.FC=()=>{
    const [count,setCount]=useState<number>(0)
    useEffect(()=>{
        console.log("coponent mounted")
        return ()=>{console.log("component unmounted")

        }    
},[]);
useEffect(()=>{
    console.log("component updated:count chsanged to ",count)
},[count]);
return (
    <div>
        <h2>functional component lifecyce</h2>
        <p>count:{count}</p>
        <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
    </div>
)
};
export default  FunctionalLifecycle




