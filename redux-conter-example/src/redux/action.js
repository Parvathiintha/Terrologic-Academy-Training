import { INCREMENT,DECREMMENT,RESET } from "./types";


//action creators
export const increment =(amount=1)=>({
    type:INCREMENT,
    payload:amount
});

export const decrement =(amount=1)=>({
    type:DECREMMENT,
    payload:amount,
});

export const reset=()=>({
    type:RESET,
})