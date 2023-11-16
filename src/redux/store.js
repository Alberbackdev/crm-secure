import { configureStore } from '@reduxjs/toolkit'
import clientReducer from './slices/clientReducer'
import polizaReducer from './slices/polizaReducer'
import pagoReducer from './slices/pagoReducer'
import ventaReducer from './slices/ventasSlice/ventaReducer'



export const store = configureStore({
    reducer: {
        client: clientReducer,
        poliza: polizaReducer,
        pago: pagoReducer,
        ventas: ventaReducer,
    }
})