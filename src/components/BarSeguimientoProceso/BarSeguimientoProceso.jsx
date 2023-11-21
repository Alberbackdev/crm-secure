"use client"
import Image from 'next/image';
import style from './BarSeguimientoProceso.module.css';
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux'
import { useScreenSize } from '@/src/utils/useWidthScreen'
import React from 'react';


const namesPageVentas = [
    {
        namePage: 'Difunto',
        urlPage: '/ventas/difunto'
    }, 
    {
        namePage: 'Responsable',
        urlPage: '/ventas/responsable'
    }, 
    {
        namePage: 'Servicio',
        urlPage: '/ventas/servicio'
    }, 
    {
        namePage: 'Confirmacion',
        urlPage: '/ventas/confirmar'
    }
];
const namesPageClientes = [
    {
        namePage: 'Datos Principales',
        urlPage: '/clientes/cliente'
    }, 
    {
        namePage: 'Poliza',
        urlPage: '/clientes/poliza'
    }, 
    {
        namePage: 'Pago',
        urlPage: '/clientes/pago'
    }, 
    {
        namePage: 'Confirmacion',
        urlPage: '/clientes/confirmar'
    }
]


function BarSeguimientoProceso({currentPage, useBarTo}) {
  const { width } = useScreenSize();
  const router = useRouter();
  const isMobile = width <= 816;
  const updatingClientData = useSelector((state) => state.client.updatingClientData) // boolean value

  const listaARecorrer = useBarTo === 'Ventas' ? namesPageVentas : namesPageClientes;
  const indexCurrentPage = listaARecorrer.map(page => page.namePage).indexOf(currentPage);

  return (
    <div className={style.content}>
      {listaARecorrer.map((page, index) => (
        <React.Fragment key={index}>
          <div
            className={style.process}
            onClick={() => updatingClientData && router.push(page.urlPage)}
          >
            {/* Si estan actualizando data permitir que pueda navegar entre las secciones */}
            <div
              className={`${style.circleIndicator} ${
                index <= indexCurrentPage ? style.circleIndicatorActive : null
              }`}
            >
              <Image
                src="/checkWhiteIcon.png"
                alt="check White Icon"
                width={isMobile ? 12 : 16}
                height={isMobile ? 12 : 13}
              />
            </div>
            <p
              className={`${
                index <= indexCurrentPage
                  ? style.nameActive
                  : style.nameInactive
              }`}
            >
              {page.namePage}
            </p>
          </div>
          {index < 3 && <div className={style.separator}></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default BarSeguimientoProceso