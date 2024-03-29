"use client";
import {useSession} from "next-auth/react"
import Image from 'next/image'
import style from './header.module.css';
import { NamePageHelper } from "../../utils/namePage"
import { usePathname, useRouter } from "next/navigation";
import { useScreenSize } from "@/src/utils/useWidthScreen"

export default function Header() {
  const router = useRouter();
  const {data: session} = useSession();
  const pathname = usePathname();

  const { width } = useScreenSize();
  const isMobile = width <= 816;

  const buttonRegistrar = () => {
    if(pathname === "/clientes") {
      router.push("/clientes/cliente")
    } else {
      router.push("/ventas/difunto")
    }
  }

  return (
    <div className={style.header}>
      <div className={style.headerNamePage}>
        <h2 className={style.namePage}>{NamePageHelper(pathname)}</h2>
        {pathname.length > 1 && !isMobile && (
          <p className={style.pathPage}>{pathname}</p>
        )}
        {(pathname === "/clientes" || pathname === "/ventas") && isMobile && (
          <button
            type="button"
            onClick={buttonRegistrar}
          >
            <Image
              priority
              src="/add.png"
              height={24}
              width={24}
              alt="Follow us on Twitter"
            />
            Registrar
          </button>
        )}
      </div>

      {/* !isMobile &&  */}
      <div className={style.contentAvatar}>
        <div className={style.circle}>
          <Image
            src="/icon-512x512.png"
            alt="Profile Image"
            className={style.avatar}
            width={50}
            height={50}
          />
        </div>
        <div className={style.nameAndRole}>
          <p className="px-2">{session?.user?.name}</p>
          <p
            className="px-2"
            style={{ marginTop: "-5px", fontSize: "14px", color: "#00000068" }}
          >
            Secretario
          </p>
        </div>
      </div>
    </div>
  );
}