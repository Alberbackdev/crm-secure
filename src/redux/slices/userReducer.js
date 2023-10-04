import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    name: ''
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            return {
                name: action.payload
            }
        }
    }
})


export const { addUser } = userReducer.actions;
export default userReducer.reducer;