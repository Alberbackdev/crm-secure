"use client"
import style from './cardRightDatosPagos.module.css'

function CardRightDatosPagos() {
  return (
    <div className={style.container}>
        <h4 className={style.title}>Datos del Pago</h4>

        <div className={style.contentTop}>
            Datos Top
        </div>
        <div className={style.contentCenter}>
            datos Center
        </div>
        <div className={style.contentBottom}>
            datos bottom
        </div>
    </div>
  )
}

export default CardRightDatosPagos