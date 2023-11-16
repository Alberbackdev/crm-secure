import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  updatingVentasData: false,
  data: {
    //_id: '',
    name: '',
    lastname: '',
    cidentified: '',
    addres: '',
    phone: '',
    dateofbirth: '',
  }
}

export const ventasReducer = createSlice({
  name: 'ventas',
  initialState,
  reducers: {
    putDataVentasToUpdate: (state, action) => { // Colocar los datos actuales del cliente para que se pueda editar.
      return {
        updatingVentasData: true,
        data: action.payload
      }
    },
    dataToCreate: (state, action) => {
      return {
        updatingVentasData: false,
        data: action.payload // data del formulario
      }
    },
    resetState: (state, action) => {
      return initialState
    }
  }
})


export const { putDataVentasToUpdate, resetState, dataToCreate } = ventasReducer.actions;
export default ventasReducer.reducer;