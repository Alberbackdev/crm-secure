"use client"
import style from './sidebar.module.css'
import { useRouter } from "next/navigation";


function MobileDesign() {
  const router = useRouter();

  return (
    <div className={style.contentSidebarMobile}>
        <div className={style.MobileLink}>
            <p onClick={() => router.push('/dashboard')}>Inicio</p>
        </div>
        <div className={style.MobileLink}>
            <p onClick={() => router.push('/clientes')}>Clientes</p>
        </div>
        <div className={style.MobileLink}>
            <p onClick={() => router.push('/ventas')}>Ventas</p>
        </div>
        <div className={style.MobileLink}>
            <p onClick={() => router.push('/configuracion')}>Configuracion</p>
        </div>       
    </div>
  )
}

export default MobileDesign