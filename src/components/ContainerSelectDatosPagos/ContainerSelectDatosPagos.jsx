
"use client"
import DatosPagos from '../DatosPagos/DatosPagos'
import style from './containerDatosPagos.module.css'

function ContainerSelectDatosPagos({ selectMeses, meses  }) {
  return (
    <div className={style.container}>
      <DatosPagos selectMeses={selectMeses} meses={meses} />
    </div>
  );
}

export default ContainerSelectDatosPagos