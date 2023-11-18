import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updatingDifuntoData: false,
  data: {
    fullname: "",
    cidentified: "",
    edad: "",
    nrohijos: "",
    dateofbirth: "",
    direccion: "",
    lugarfallecimiento: "",
    nameconyugue: "",
  },
};

export const difuntoReducer = createSlice({
  name: "difunto",
  initialState,
  reducers: {
    putDataDifuntoToUpdate: (state, action) => {
      // Colocar los datos actuales del cliente para que se pueda editar.
      return {
        updatingDifuntoData: true,
        data: action.payload,
      };
    },
    dataToCreate: (state, action) => {
      return {
        updatingDifuntoData: false,
        data: action.payload, // data del formulario
      };
    },
    resetState: (state, action) => {
      return initialState;
    },
  },
});

export const { putDataDifuntoToUpdate, resetState, dataToCreate } =
  difuntoReducer.actions;
export default difuntoReducer.reducer;
