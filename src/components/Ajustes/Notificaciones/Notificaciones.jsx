import { useState } from 'react'
import style from './notificaciones.module.css'

function Notificaciones() {
    const [notificacionesActivas, setNotificacionesActivas] = useState(false)

  return (
    <div className={style.container}>
      <h3 className={style.title}>Notificaciones</h3>
      <div className={style.notifications}>
        <div className={style.handleNotifications}>
            { notificacionesActivas ? <p className={style.selected}>Activa</p> : <p onClick={() => setNotificacionesActivas(true)}>Activar</p>}
            { notificacionesActivas ? <p onClick={() => setNotificacionesActivas(false)}>Desactivar</p> : <p className={style.selected}>Desactivada</p> }
        </div>
        <h3>Notificaciones del Sistema</h3>
      </div>
      <p className={style.messageInfo}>Si quieres que el sistema te notifique las actividades o acciones de tus vendedores/cobradores, deberas activar esta función.</p>
    </div>
  )
}

export default Notificaciones