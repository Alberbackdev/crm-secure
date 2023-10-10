import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    updatingClientData: false,
    data : {
        _id: '',
        name: '',
        lastname: '',
        cidentified: '',
        addres: '',
        phone: '',
        dateofbirth: '',
        polize: '',
        beneficiarios: [],
        createdAt: '',
        updatedAt: ''
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
        }
    }
})


export const { putDataClientToUpdate } = clientReducer.actions;
export default clientReducer.reducer;