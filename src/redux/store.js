import { configureStore } from '@reduxjs/toolkit'
import clientReducer from './slices/clientReducer'
import polizaReducer from './slices/polizaReducer'
import pagoReducer from './slices/pagoReducer'
import difuntoReducer from './slices/ventasSlice/difuntoReducer'
import responsableReducer from './slices/ventasSlice/responsableReducer'
import servicioReducer from './slices/ventasSlice/servicioReducer'
import beneficiarioReducer from './slices/beneficiarioReducer'


export const store = configureStore({
    reducer: {
        client: clientReducer,
        poliza: polizaReducer,
        pago: pagoReducer,
        difunto: difuntoReducer,
        responsable: responsableReducer,
    }
})