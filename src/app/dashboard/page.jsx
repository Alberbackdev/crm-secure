"use client";
import ContainerPrinc from "@/src/components/LayoutFolder/Layout";
import { useSession } from "next-auth/react";
import style from './dashboard.module.css'
import Image from "next/image"

function DashboardPage() {
  const { data: session, status } = useSession();

  console.log({session, status})

  return (
    <ContainerPrinc>
      <div className={style.dashboard}>
        <div className={style.welcomeMessage}>
          <div className={style.message}>
            <h3 className={style.titleCards}>Hola, bienvenido al <span style={{background: '#2b308b', color: '#fff', padding: '5px'}}>Sistema!</span></h3>
            <p>El SGDD ofrece herramientas que impulsan la profesionalización y eficiencia en la gestión de registros de clientes 
              y ventas. Permitiendo registrar, capturar y almacenar información de manera óptima, 
              mejorando así los procesos y facilitando el acceso a los datos almacenados.
            </p>
          </div>
          <div>
            <Image
                priority
                src="/svgDashboard.svg"
                height={240}
                width={240}
                alt="Follow us on Twitter"
            />
          </div>
        </div>
        <div className={style.zonaInferior}>
          <h3 className={style.titleCards}>Descubre nuestros servicios de alta calidad</h3>
          <div className={style.cardsPages}>
            <div className={style.card}>
              <div className={style.cardTop}>
                <div> <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg></div>
                <div>Clientes</div>
              </div>
              <p className={style.textCard}>Permite registrar y almacenar información detallada de los clientes.</p>
              <div className={style.bottom}>
                <p>Datos Personales</p>
                <p>Poliza</p>
                <p>Beneficiarios</p>
                <p>Pagos</p>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.cardTop}>
                <div> <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg></div>
                <div>Ventas</div>
              </div>
              <p className={style.textCard}>Permite registrar y almacenar información detallada sobre las transacciones de ventas.</p>
              <div className={style.bottom}>
                <p>Datos Personales</p>
                <p>Poliza</p>
                <p>Beneficiarios</p>
                <p>Pagos</p>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.cardTop}>
                <div><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg></div>
                <div>Configuracion</div>
              </div>
              <p className={style.textCard}>Permite a los usuarios visualizar y gestionar el sistema.</p>
              <div className={style.bottom}>
                <p>Datos Personales</p>
                <p>Poliza</p>
                <p>Beneficiarios</p>
                <p>Pagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerPrinc>
  );
}

export default DashboardPage;
