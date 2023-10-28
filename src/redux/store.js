import { configureStore } from '@reduxjs/toolkit'
import clientReducer from './slices/clientReducer'
import polizaReducer from './slices/polizaReducer'


export const store = configureStore({
    reducer: {
        client: clientReducer,
        poliza: polizaReducer
    }
})