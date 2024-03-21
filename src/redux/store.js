import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const store = configureStore({
    //reducer is predefined key which an object that can hold more than one reucer as key value pairs
    reducer:{
        counter:counterSlice
    }
})