import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import authReducer from '../features/authSlice'

export  let store = configureStore({
    reducer:{
        counter:counterReducer,
        auth:authReducer,
    }
})

