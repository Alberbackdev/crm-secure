import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './slices/userReducer'


export const store = configureStore({
    reducer: {
        user: UserReducer
    }
})