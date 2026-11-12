import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    
    initialState:{
    user:null,
    isAuthenticated:false,
    },

    reducers:{
        addUser:(state,actions) =>{
            state.user = actions.payload;
            state.isAuthenticated = true;
        },
        removeUser:(state,actions) =>{
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})

export const {addUser,removeUser} = authSlice.actions;

export default authSlice.reducer;