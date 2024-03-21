import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name:'couterApp',
    initialState:{
        value:0
    },
    /* action are created inside reduced key*/
    reducers:{
        //fuction to increment value
        increment:(state,action)=>{
            //function with argument - value will be obtained in action.playload
            state.value+=action.payload
        },
        //function to decrement
        decrement:(state,action)=>{
            state.value-=action.payload
        },
        //function to reset
        reset:(state)=>{
            state.value = 0
        }

    }
})

//used are used by components to access the state
export const {increment,decrement,reset} = counterSlice.actions
//reduced is required for store to change the value of state
export default counterSlice.reducer