import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    updatingClientData: false,
    data : {
        //_id: '',
        name: '',
        lastname: '',
        cidentified: '',
        addres: '',
        phone: '',
        dateofbirth: '',
    }
}

export const clientReducer = createSlice({
    name: 'client',
    initialState,
    reducers: {
        putDataClientToUpdate: (state, action) => { // Colocar los datos actuales del cliente para que se pueda editar.
            return {
                updatingClientData: true,
                data: action.payload
            }
        },
        dataToCreate: (state, action) => {
            return {
                updatingClientData: false,
                data: action.payload // data del formulario
            }
        },
        resetState: (state, action) => {
            return initialState
        }
    }
})


export const { putDataClientToUpdate, resetState, dataToCreate } = clientReducer.actions;
export default clientReducer.reducer;