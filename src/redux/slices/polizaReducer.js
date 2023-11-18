import {createSlice} from '@reduxjs/toolkit'



const initialState = {
  updatingPolizaData: false,
  data: {
    //_id: '',
    codigoPoliza: "",
    type_polize: "",
    seller: "",
    dateofcontract: "",
    city_contract: "",
    clientId: ""
  }
};

export const polizaReducer = createSlice({
    name: 'poliza',
    initialState,
    reducers: {
        putDataPolizaToUpdate: (state, action) => { // Colocar los datos actuales del cliente para que se pueda editar.
            return {
                updatingPolizaData: true,
                data: action.payload
            }
        },
        dataToCreate: (state, action) => {
            return {
                updatingPolizaData: false,
                data: action.payload // data del formulario
            }
        },
        resetPolizaSlice: (state, action) => {
            return initialState
        }
    }
})


export const { putDataPolizaToUpdate, resetPolizaSlice, dataToCreate } = polizaReducer.actions;
export default polizaReducer.reducer;