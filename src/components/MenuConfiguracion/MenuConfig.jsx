import style from './MenuConfig.module.css';
import Link from "next/link";


function MenuConfig() {
  return (
    <div className={style.content}> 
        <div className={style.config}>
            <p className="title">PERSONAL</p>
            <Link href={"/"} className="flex gap-1 mb-4">
                <p className={style.links}>Preferencias Personales</p>
            </Link>
            <Link href={"/"} className="flex gap-1 mb-4">
                <p className={style.links}>Tus dispositivos</p>
            </Link>
        </div>
        <div className={style.config}>
            <p className="title">EMPRESA</p>
            <Link href={"/"} className="flex gap-1 mb-4">
                <p className={style.links}>Tus dispositivos</p>
            </Link>
            <Link href={"/"} className="flex gap-1 mb-4">
                <p className={style.links}>Tus dispositivos</p>
            </Link>
        </div>
        <div className={style.config}>
            <p className="title">CENTRO DE SEGURIDAD</p>
            <Link href={"/"} className="flex gap-1 mb-4">
                <p className={style.links}>Tus dispositivos</p>
            </Link>
            <Link href={"/"} className="flex gap-1 mb-4">
                <p className={style.links}>Tus dispositivos</p>
            </Link>
        </div>
    </div>
  )
}

export default MenuConfig