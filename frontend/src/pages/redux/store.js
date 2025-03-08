import {configureStore} from "@reduxjs/toolkit"
import userReducer  from "./user/userSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
    },


 // prevent possible errors

 middleware: ( getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck :false,
    }),
})

