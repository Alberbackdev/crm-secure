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
    full_payment_dollar: 0,
    clientId: "",
    polizaId: ''
  },
  monthsList: [
    {nombreMes: "Enero", monto: ""},
    {nombreMes: "Febrero", monto: ""},
    {nombreMes: "Marzo", monto: ""},
    {nombreMes: "Abril", monto: ""},
    {nombreMes: "Mayo", monto: ""},
    {nombreMes: "Junio", monto: ""},
    {nombreMes: "Julio", monto: ""},
    {nombreMes: "Agosto", monto: ""},
    {nombreMes: "Septiembre", monto: ""},
    {nombreMes: "Octubre", monto: ""},
    {nombreMes: "Noviembre", monto: ""},
    {nombreMes: "Diciembre", monto: ""},
  ]
}

export const pagoReducer = createSlice({
  name: 'pago',
  initialState,
  reducers: {
    putDataPagoToUpdate: (state, action) => { // Colocar los datos actuales del cliente para que se pueda editar.
      return {
        ...state, 
        updatingPagoData: true,
        data: action.payload
      }
    },
    putMontoToMesesPagados: (state, action) => { //colocar en el array monthsList, el monto a los meses que ya estan pagos, data que llega del backend.
      const mesesPagados = action.payload.month_pay; // data que llega del backend
      const arrayDeMeses = state.monthsList.slice(mesesPagados.length);
      const listaDePagosTransformada = [...mesesPagados, ...arrayDeMeses];

      return {//este metodo 'putMontoToMesesPagados' se usa cuando se esta actualizando cliente y se trajeron los datos del backend
        monthsList: listaDePagosTransformada, 
        updatingPagoData: true, 
        data: action.payload
      }
    },
    dataToCreate: (state, action) => {
      return {
        ...state,
        updatingPagoData: false,
        data: action.payload // data del formulario
      }
    },
    putOrRemovePriceToMonth: (state, action) => { // esto se ejecuta en los inputs del componente mensualidad
      const { nameMonth, monto } = action.payload;
      const montoAgregado = state.monthsList.map(mes => mes.nombreMes === nameMonth ? ({...mes, monto}) : mes);
      const isTheMonthInMonth_payArray = state.data.month_pay.find(mes => mes?.nombreMes === nameMonth);

      return {
        ...state,
        data: monto 
            ? isTheMonthInMonth_payArray
              ? {...state.data, month_pay: state.data.month_pay.map(mes => mes.nombreMes === nameMonth ? ({...mes, monto}) : mes) }
              : {...state.data, month_pay: [...state.data.month_pay, {nombreMes: nameMonth, monto}]} // agregar mes al array month_pay
            : {...state.data, month_pay: state.data.month_pay.filter(mes => mes?.nombreMes !== nameMonth)}, // remover mes del array month_pay
        monthsList: montoAgregado
      }
    },
    resetPagoSlice: (state, action) => {
      return initialState
    }
  }
})


export const { putDataPagoToUpdate, putMontoToMesesPagados, resetPagoSlice, dataToCreate, putOrRemovePriceToMonth } = pagoReducer.actions;
export default pagoReducer.reducer;