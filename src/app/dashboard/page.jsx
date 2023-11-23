"use client";
import ContainerPrinc from "@/src/components/LayoutFolder/Layout";
import { useSession, signOut } from "next-auth/react";
import style from './dashboard.module.css'

function DashboardPage() {
  const { data: session, status } = useSession();

  console.log({session, status})

  return (
    <ContainerPrinc>
      <div className="h-[calc(100vh-4rem)] flex flex-col gap-y-10 items-center justify-center text-white">
        <h1 className="font-bold text-3xl">Profile</h1>

        <h3 className={style.userInfo}>Bienvenido 👋 {session?.user?.fullname}</h3>

        <button
          className={style.logoutBtn}
          onClick={() => {
            signOut();
          }}
        >
          Cerrar Sesión
        </button>
      </div>
    </ContainerPrinc>
  );
}

export default DashboardPage;
