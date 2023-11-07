"use client"


import { precioBCV } from '@/src/utils/getDolarPrice';
import Mensualidad from './Mensualidad/Mensualidad';
import styleMen from "./Mensualidad/mensualidad.module.css";
import style from './datosPagos.module.css';
import { useForm } from '@/src/utils/useForm';
import { useEffect, useState } from 'react';

export default function DatosPagos({ selectMeses, sendDataPagos }) {
  const precio = async(precioBCV) => {await precioBCV}
    
  console.log(selectMeses)

  console.log(precio);

  const { values, handleInputChange } = useForm({
    type_pay: "",
    type_of_change: precioBCV,
    date_pay: "",
    status_pay: "",
  });
  values.month_pay = selectMeses;

  console.log(values);

  sendDataPagos(values);

  //utilizar sendDataPAgos, para llevar la data al componente padre
  

  return (
    <div className={style.containerTopData}>
      <h1 className={style.title}>Ingrese los Datos del Pago</h1>
      <form className={style.formContent}>
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
            <label htmlFor="cambioCoin">Cambio Monetario</label>
            <input
              id="cambioCoin"
              name="type_of_change"
              type="text"
              className={style.inputForm}
              value={values.type_of_change}
              onChange={handleInputChange}
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
