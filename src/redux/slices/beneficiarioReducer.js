import {createSlice} from '@reduxjs/toolkit'


// estructura del array 
// {
//     name_payee: "",
//     cidentified_payee: "",
//     age_payee: "",
//     dateofbirth: "",
//     clienteId: "",
//     polizaId: "",
// }

const initialState = {
    updateBeneficiario: false,
    dataBeneficiarioToUpdate: {
        name_payee: "",
        cidentified_payee: "",
        age_payee: "",
        dateofbirth: ""
    },
    data: []
}

export const beneficiarioReducer = createSlice({
    name: 'beneficiario',
    initialState,
    reducers: {
        putDataBeneficiarios: (state, action) => {
            return { 
                ...state,         
                data: [...state.data, ...action.payload]
            }
        },
        removerBeneficiario: (state, action) => {
            return {      
                ...state,  
                data: state.data.filter(beneficiario => beneficiario.cidentified_payee !== action.payload.cidentified_payee)
            }
        },
        updateBeneficiarioInArray: (state, action) => { // Aqui ya se confirma el update y debo poner la data nueva en el array de los beneficiarios
            return {                       
                updateBeneficiario: false,
                dataBeneficiarioToUpdate: initialState.dataBeneficiarioToUpdate,
                data: state.data.map(beneficiario => beneficiario.cidentified_payee === action.payload.cidentified_payee ? {...action.payload} : beneficiario)
            }
        },
        putBeneficiarioToUpdate: (state, action) => {
            return {      
                ...state,  
                updateBeneficiario: true,
                dataBeneficiarioToUpdate: action.payload
            }
        },
        resetBeneficiarioSlice: (state, action) => {
            return initialState
        }
    }
})


export const { putDataBeneficiarios, resetBeneficiarioSlice, updateBeneficiarioInArray, removerBeneficiario, putBeneficiarioToUpdate } = beneficiarioReducer.actions;
export default beneficiarioReducer.reducer;