import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset, decrementByAmount } from "./myCounterSlice";

export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>Counter:{value}</h2>
      <div
        styele={{
          display: "flex",
          gap: 5,
          justifyContent: "center",
          marginBottom: 12,
        }}
      >
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={()=>dispatch(decrementByAmount(3))}>sub Amount</button>

      </div>

      <div style={{ marginTop: 12 }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          style={{ width: 80, marginRight: 8 }}
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
        >
          Add amount
        </button>
        <button onClick={()=>dispatch(decrementByAmount(Number(amount)))}>reduce Amount</button>
      </div>
    </div>
  );
}
