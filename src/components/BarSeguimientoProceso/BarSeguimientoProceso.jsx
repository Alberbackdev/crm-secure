"use client"
import Image from 'next/image';
import style from './BarSeguimientoProceso.module.css';
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux'


const namesPageVentas = [
    {
        namePage: 'Datos Del Difunto',
        urlPage: '/ventas'
    }, 
    {
        namePage: 'Datos Responsable del Servicio',
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
  const updatingClientData = useSelector((state) => state.client.updatingClientData) // boolean value
  const listaARecorrer = useBarTo === 'Ventas' ? namesPageVentas : namesPageClientes;
  const indexCurrentPage = listaARecorrer.map(page => page.namePage).indexOf(currentPage);
  const router = useRouter();

  return (
    <div className={style.content}> 
        {
            listaARecorrer.map((page, index) => (
                <>
                    <div className={style.process} key={index} onClick={() => updatingClientData && router.push(page.urlPage)}> {/* Si estan actualizando data permitir que pueda navegar entre las secciones */}
                        <div className={`${style.circleIndicator} ${index <= indexCurrentPage ? style.circleIndicatorActive : null}`}>
                            <Image src='/checkWhiteIcon.png' alt='check White Icon' width={16} height={13} />
                        </div>
                        <p className={`${index <= indexCurrentPage ? style.nameActive : style.nameInactive}`}>{page.namePage}</p>
                    </div>
                    { index < 3 && <div className={style.separator}></div>}
                </>
            ))
        }
    </div>
  )
}

export default BarSeguimientoProceso