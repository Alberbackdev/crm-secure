"use client"
import Link from 'next/link';
import style from './sidebar.module.css'
import { useRouter } from "next/navigation";


function MobileDesign() {
  //const router = useRouter();

  return (
    <div className={style.contentSidebarMobile}>
      <Link href={"/dashboard"} className={style.MobileLink}>
        Inicio
      </Link>
      <Link href={"/clientes"} className={style.MobileLink}>
        Clientes
      </Link>
      <Link href={"/ventas"} className={style.MobileLink}>
        Ventas
      </Link>
      <Link href={"/configuracion"}  className={style.MobileLink}>
        Configuracion
      </Link>
    </div>
  );
}

export default MobileDesign