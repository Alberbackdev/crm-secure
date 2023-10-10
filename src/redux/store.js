import { configureStore } from '@reduxjs/toolkit'
import clientReducer from './slices/clientReducer'


export const store = configureStore({
    reducer: {
        client: clientReducer
    }
})