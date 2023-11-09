"use client";
import { useState } from "react";
import ContainerSelectDatosPagos from "@/src/components/ContainerSelectDatosPagos/ContainerSelectDatosPagos"
import CardRightDatosPagos from "@/src/components/CardRightDatosPagos/CardRightDatosPagos"
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import style from '@/src/styles/stylePages.module.css'

export default function Pagos() {
  const [meses, setMeses] = useState([]);
  const [dataP, setDataP] = useState([]);
  
  
  const selectMeses = (meses) => {
    console.log(meses);
    setMeses(meses);
  };

  const sendDataPagos = (dataPa) => {
    //console.log(dataPa);
    setDataP(dataPa);
  };

  return (
    <>
      <BarSeguimientoProceso currentPage={"Pago"} useBarTo={"Clientes"} />

      <div className={style.pagoPage}>
        <ContainerSelectDatosPagos
          selectMeses={selectMeses}
          sendDataPagos={sendDataPagos}
        />
        <CardRightDatosPagos meses={meses} dataP={dataP} />
      </div>
    </>
  );
}
