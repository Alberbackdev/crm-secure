import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updatingResponsableData: false,
  data: {
    fullname: "",
    dateofbirth: "",
    cidentified: "",
    telefono: "",
    parentesco: "",
    direccion: "",
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
    dataResponsableToCreate: (state, action) => {
      return {
        updatingResponsableData: false,
        data: action.payload, // data del formulario
      };
    },
    resetResponsableSlice: (state, action) => {
      return initialState;
    },
  },
});

export const { putDataResponsableToUpdate, resetResponsableSlice, dataResponsableToCreate } =
  responsableReducer.actions;
export default responsableReducer.reducer;
