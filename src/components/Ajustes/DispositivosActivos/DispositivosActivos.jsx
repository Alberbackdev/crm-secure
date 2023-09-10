import Image from 'next/image'
import style from './DispositivosActivos.module.css'

function DispositivosActivos() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Tus Dispositivos</h3>
      <div className={style.content}>
        <p className={style.textBold}>Dispositivos Activos</p>
        <p className={style.textInfo}>Estos son los dispositivos  actualmente conectados a tu cuenta, ordenados por hora de inicio de sesion.</p>
        <div className={style.devicesConnected}>
            <div className={style.device}>
                <Image width={24} height={12} alt='iconDevice' src={'/devicesIcon.png'}/>
                <p><b>Chrome, Windows</b> 10.290.103.248.170 Febrero 26, 2023 2:12 P.M</p>
            </div>
            <div className={style.device}>
                <Image width={24} height={12} alt='iconDevice' src={'/devicesIcon.png'}/>
                <p><b>Chrome, Windows</b> 10.290.103.248.170 Febrero 26, 2023 2:12 P.M</p>
            </div>
            <div className={style.device}>
                <Image width={24} height={12} alt='iconDevice' src={'/devicesIcon.png'}/>
                <p><b>Chrome, Windows</b> 10.290.103.248.170 Febrero 26, 2023 2:12 P.M</p>
            </div>
        </div>
        <p className={style.warningMessage}>Si observas algún inicio de sesion sospechoso, te aconsejamos cerrar la sesión del dispositivo y <span style={{color: '#5A81FA'}}>cambiar la contraseña</span> a una más segura.</p>
        <div className={style.separatorline}></div>
      </div>
      <div className={style.content}>
        <p className={style.textBold}>Historial de Dispositivos</p>
        <p className={style.textInfo}>Este es tu historial de dispositivos. Puedes usar esta lista para ver como, cuando y mediante que dispositivo se ha activado a tu cuenta en los ultimos 60 dias.</p>
        <div className={style.devicesConnected}>
            <div className={style.device}>
                <Image width={24} height={12} alt='iconDevice' src={'/devicesIcon.png'}/>
                <p><b>Aún no hay nada que mostrar aqui.</b></p>
            </div>           
        </div>       
      </div>
    </div>
  )
}

export default DispositivosActivos