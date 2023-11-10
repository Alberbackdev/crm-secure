"use client"
import { usePathname, useRouter } from 'next/navigation'
import style from './CardRightDatosVentas.module.css'
import NumerosServicios from "@/src/components/ventas/NumeroServicios/NumerosServicios";


function CardRightDatosVentas() {
    const router = useRouter();
    const pathname = usePathname();
    const isFacturaPage = pathname === '/facturas/ventas';
    const isConfirmarPage = pathname.includes('confirmar');

    return (
        <div className={style.container}>
            <div className={style.contentNumServicios}> 
                <NumerosServicios />
            </div>

            <h4 className={style.title}>Datos del Pago</h4>    
            <div className={style.contentTop}>
                <div>
                    <p className={style.descripcion}>Fecha</p>
                    <p className={style.data}>Sabado, 24 Febrero 2023</p>
                </div>
                <p className={style.descripcion}>Seleccion de Servicio</p>
                <p className={style.data}>Ataud (Urna) Tipo: Tapa Redonda</p>                      
            </div>
            
            <div className={style.contentCenter}>
              <p className={style.title}>Monto y Pago</p>
                <div className={style.mesesPagados}>                   
                    <div className={style.mesPagado}>
                      <p className={style.descripcion}>Abono</p>
                      <p className={style.montoPagado}>250.00</p>
                    </div>
                    <div className={style.mesPagado}>
                      <p className={style.descripcion}>Resta</p>
                      <p className={style.montoPagado}>250.00</p>
                    </div>
                </div>
                <div className={style.montoEnMoneda}>
                    <div className={`${style.mesPagado_center} ${style.monedaBs}`}>
                      <p>Precio Total Bs</p>
                      <p>750.00</p>
                    </div>               
                </div>
            </div>
            {!isFacturaPage && 
              <div className={style.contentBottom}>
                  <button type='button' onClick={() => isConfirmarPage ? router.push('/facturas/ventas') : router.push('/ventas/servicio')} className={style.confirmBtn} style={{backgroundColor: isConfirmarPage ? '#289056' : '#2B308B'}}>
                    { isConfirmarPage ? 'Descargar' : 'Confirmar'}
                  </button>
                  <p className={style.cancelarBtn} onClick={() => router.push('/ventas/servicio')}>
                    { isConfirmarPage ? 'Salir' : 'Cancelar Venta'}
                  </p>
              </div>
            }
        </div>
      )
}

export default CardRightDatosVentas