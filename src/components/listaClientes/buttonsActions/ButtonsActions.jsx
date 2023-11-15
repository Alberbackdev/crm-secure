"use client";
import style from "./buttonsActions.module.css";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function ButtonsActions(poliza) {
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonRegistrar = () => {
    
    if (pathname === "/clientes") {
      router.push("/clientes/cliente");
    } else {
      router.push("/ventas/venta");
    }
  };

  return (
    <div className={style.contentButtons}>
      <button type="button">
        <Image
          priority
          src="/upload.png"
          height={24}
          width={24}
          alt="Follow us on Twitter"
        />
        Exportar
      </button>
      <button type="button" onClick={handleButtonRegistrar}>
        <Image
          priority
          src="/add.png"
          height={24}
          width={24}
          alt="Follow us on Twitter"
        />
        Registrar
      </button>
    </div>
  );
}
