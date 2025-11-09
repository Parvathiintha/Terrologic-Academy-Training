import react from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/action";

export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Counter:{value}</h1>
    
    <div style ={{display:"flex", justifyContent:"center",gap:9}}>
        <button onClick={()=>dispatch(decrement())}>-1</button>
        <button onClick={()=>dispatch(increment())}>+1</button>
            <button onClick={()=>dispatch(increment(5))}>+5</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>

    </div>
  );
}
