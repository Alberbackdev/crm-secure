
"use client"

import DatosPagos from '../DatosPagos/DatosPagos'
import Mensualidad from '../DatosPagos/Mensualidad/Mensualidad'
import style from './containerDatosPagos.module.css'

function ContainerSelectDatosPagos({ selectMeses, sendDataPagos }) {
  return (
    <div className={style.container}>
      <DatosPagos selectMeses={selectMeses} sendDataPagos={sendDataPagos} />
      {/* <Mensualidad /> */}
    </div>
  );
}

export default ContainerSelectDatosPagos