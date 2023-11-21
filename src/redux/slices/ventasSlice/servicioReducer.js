import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updatingServicioData: false,
  data: {
    tipodeataud: "",
    tipodecambio:"",
    nroservicio: "",
    formatodepago: "",
    preciodolarataud: "",
    fecha: "",
    preciobsataud: "",
    abonopagoataud: "",
    restapagoataud: "",
    comentarioadd: "",
    ubicacionventa: "",
  },
};

export const servicioReducer = createSlice({
  name: "servicio",
  initialState,
  reducers: {
    putDataServicioToUpdate: (state, action) => {
      // Colocar los datos actuales del cliente para que se pueda editar.
      return {
        updatingServicioData: true,
        data: action.payload,
      };
    },
    dataServicioToCreate: (state, action) => {
      return {
        updatingServicioData: false,
        data: action.payload, // data del formulario
      };
    },
    resetServicioSlice: (state, action) => {
      return initialState;
    },
  },
});

export const { putDataServicioToUpdate, dataServicioToCreate, resetServicioSlice } =
  servicioReducer.actions;
export default servicioReducer.reducer;
