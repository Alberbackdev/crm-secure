import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updatingResponsableData: false,
  data: {
    fullname: "",
    cidentified: "",
    parentesco: "",
    dateofbirth: "",
    direccion: "",
    telefono: "",
    segurodifunto: "",
  },
};

export const responsableReducer = createSlice({
  name: "responsable",
  initialState,
  reducers: {
    putDataResponsableToUpdate: (state, action) => {
      // Colocar los datos actuales del cliente para que se pueda editar.
      return {
        updatingResponsableData: true,
        data: action.payload,
      };
    },
    dataToCreate: (state, action) => {
      return {
        updatingResponsableData: false,
        data: action.payload, // data del formulario
      };
    },
    resetState: (state, action) => {
      return initialState;
    },
  },
});

export const { putDataResponsableToUpdate, resetState, dataToCreate } =
  responsableReducer.actions;
export default responsableReducer.reducer;
