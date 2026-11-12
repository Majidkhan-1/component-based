import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react';

let counterSlice = createSlice({
    name:"counterSlice",
    initialState:{
        count:0,
    },

    reducers:{
        increment:(state,actions)=>{
            state.count++;
        },
        decrement:(state,actions)=>{
            state.count--;
        },
        incrementByValue:(state,actions)=>{
            state.count += Number(actions.payload);
        }
    }
})

export const {increment,decrement,incrementByValue} = counterSlice.actions;

export default counterSlice.reducer;