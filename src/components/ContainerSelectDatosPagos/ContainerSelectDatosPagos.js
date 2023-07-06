
"use client"
import DatosPagos from '../DatosPagos/DatosPagos'
import Mensualidad from '../DatosPagos/Mensualidad/Mensualidad'
import style from './containerDatosPagos.module.css'

function ContainerSelectDatosPagos() {
  return (
    <div className={style.container}>
        <DatosPagos />
        <Mensualidad />
    </div>
  )
}

export default ContainerSelectDatosPagos