
"use client"
import DatosPagos from '../DatosPagos/DatosPagos'
import style from './containerDatosPagos.module.css'

function ContainerSelectDatosPagos() {
  return (
    <div className={style.container}>
      <DatosPagos />
    </div>
  );
}

export default ContainerSelectDatosPagos