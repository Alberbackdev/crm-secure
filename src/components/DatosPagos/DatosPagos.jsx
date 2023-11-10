"use client"


import { precioBCV } from '@/src/utils/getDolarPrice';
import Mensualidad from './Mensualidad/Mensualidad';
// import styleMen from "./Mensualidad/mensualidad.module.css";
import style from './datosPagos.module.css';
import { useForm } from '@/src/utils/useForm';
import { useEffect, useState,  } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '@/src/redux/slices/pagoReducer';

export default function DatosPagos({ selectMeses, meses, sendDataPagos }) {
  const [error, setError] = useState("");
  const valuesPago = useSelector(state => state.pago.data); // state es el reducer y con el punto se accede al nombre se accede al slice
  const router = useRouter();
  const dispatch = useDispatch();
  const params = useParams();

  
  console.log(meses);
  //llama a la funcion para actualizar el estado del input
  const { values, handleInputChange, reset } = useForm(valuesPago);
  
  
  Object.assign(values.month_pay, {
    meses,
  });
  const total = meses?.length
    ? meses.reduce((acumulador, actual) => acumulador + +actual?.value, 0)
    : 0;
  const totalDolar = total / values?.type_of_change;

  

  values.full_payment_bs = total;
  values.full_payment_dollar = totalDolar;

  
  console.log(values);
  
  //values.month_pay = meses;
  sendDataPagos(values);
  
  //actua como actualizador y reseteo de forms
  const sendPago = (ev) => {
    console.log(values);
    ev.preventDefault();
    dispatch(dataToCreate(values));
  };
  
 

  useEffect(() => {
    async function getPrecioBCV () {
      const precioDolar = await precioBCV;
      handleInputChange({target: {name: 'type_of_change', value: precioDolar}})
    }
    getPrecioBCV()
  }, [])
  

  //utilizar sendDataPAgos, para llevar la data al componente padre
  

  return (
    <div className={style.containerTopData}>
      <h1 className={style.title}>Ingrese los Datos del Pago</h1>
      <form onSubmit={sendPago} className={style.formContent}>
        <div className={style.formGroup}>
          <div className={style.formChild}>
            <label htmlFor="formatoPago">Formato de pago</label>
            <input
              id="formatoPago"
              name="type_pay"
              type="text"
              placeholder="Transferencia 0973"
              className={style.inputForm}
              value={values.type_pay}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.formChild}>
            <label htmlFor="cambioCoin">Cambio Monetario | BCV</label>
            <input
              id="cambioCoin"
              name="type_of_change"
              type="text"
              className={style.inputForm}
              value={values.type_of_change}
              onChange={handleInputChange}
              disabled
            />
          </div>
        </div>
        <div className={style.formGroup}>
          <div className={style.formChild}>
            <label htmlFor="fechaPago">Fecha de pago</label>
            <input
              type="date"
              id="fechaPago"
              name="date_pay"
              className={style.inputForm}
              value={values.date_pay}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.formChild}>
            <label htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              name="status_pay"
              className={style.inputForm}
              placeholder="Activo"
              value={values.status_pay}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
      <Mensualidad selectMeses={selectMeses} />
    </div>
  );
}
