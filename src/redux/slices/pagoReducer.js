import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  updatingPagoData: false,
  data: {
    type_pay:'',
    date_pay:'',
    type_of_change:'',
    month_pay:[],
    status_pay:'',
    full_payment_bs: 0,
    full_payment_dollar: 0
  }
}

export const pagoReducer = createSlice({
  name: 'pago',
  initialState,
  reducers: {
    putDataPagoToUpdate: (state, action) => { // Colocar los datos actuales del cliente para que se pueda editar.
      return {
        updatingPagoData: true,
        data: action.payload
      }
    },
    dataToCreate: (state, action) => {
      return {
        updatingPagoData: false,
        data: action.payload // data del formulario
      }
    },
    resetState: (state, action) => {
      return initialState
    }
  }
})


export const { putDataPagoToUpdate, resetState, dataToCreate } = pagoReducer.actions;
export default pagoReducer.reducer;