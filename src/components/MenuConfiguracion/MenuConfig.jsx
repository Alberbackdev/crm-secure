import style from './MenuConfig.module.css';
import Link from "next/link";


function MenuConfig() {
  return (
    <div className={style.content}> 
        <div className={style.config}>
            <p className={style.title}>PERSONAL</p>
            <Link href={"/"} >
                <p className={style.links}>Preferencias Personales</p>
            </Link>
            <Link href={"/"} >
                <p className={style.links}>Contraseña e Inicio de sesion</p>
            </Link>
            <Link href={"/"} >
                <p className={style.links}>Tus dispositivos</p>
            </Link>
            <Link href={"/"} >
                <p className={style.links}>Notificaciones</p>
            </Link>
        </div>
        <div className={style.config}>
            <p className={style.title}>EMPRESA</p>
            <Link href={"/"} >
                <p className={style.links}>Ajuste de la empresa</p>
            </Link>
            <Link href={"/"} >
                <p className={style.links}>Administrar Usuarios</p>
            </Link>
        </div>
        <div className={style.config}>
            <p className={style.title}>CENTRO DE SEGURIDAD</p>
            <Link href={"/"} >
                <p className={style.links}>Tablero</p>
            </Link>
            <Link href={"/"} >
                <p className={style.links}>Alertas</p>
            </Link>
        </div>
    </div>
  )
}

export default MenuConfig