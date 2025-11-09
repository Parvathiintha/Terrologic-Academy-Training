import {configureStore }from"@reduxjs/toolkit"
import counterReducer from "../features/counter/myCounterSlice"
export const store =configureStore({
    reducer:{
        counter:counterReducer,
    },
})
