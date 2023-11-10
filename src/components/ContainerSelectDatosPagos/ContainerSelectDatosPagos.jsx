
"use client"

import DatosPagos from '../DatosPagos/DatosPagos'
import Mensualidad from '../DatosPagos/Mensualidad/Mensualidad'
import style from './containerDatosPagos.module.css'

function ContainerSelectDatosPagos({ selectMeses, meses  }) {
  return (
    <div className={style.container}>
      <DatosPagos selectMeses={selectMeses} meses={meses} />
      {/* <Mensualidad /> */}
    </div>
  );
}

export default ContainerSelectDatosPagos