"use client"
import { useRouter, usePathname } from 'next/navigation'
import style from './cardRightDatosPagos.module.css'

function CardRightDatosPagos() {
  const router = useRouter();
  const pathname = usePathname();
  const isConfirmarPage = pathname.includes('confirmar');


  return (
    <div className={style.container}>
        <h4 className={style.title}>Datos del Pago</h4>

        <div className={style.contentTop}>
            <div>
                <p className={style.descripcion}>Fecha</p>
                <p className={style.data}>Sabado, 24 Febrero 2023</p>
            </div>
            <p className={style.descripcion}>Numero de Referencia</p>
            <p className={style.data}>0973</p>
           {
            isConfirmarPage && 
              <div className={style.horizontal}>
                  <div>
                    <p className={style.descripcion}>N° de Meses que Pago</p>
                    <p className={style.data}>4</p> 
                  </div>  
                  <div>
                    <p className={style.descripcion}>N° de Meses a Deber</p>
                    <p className={style.data} style={{textAlign: 'right'}}>9</p> 
                  </div>           
              </div>
           }
            <div className={style.horizontal}>
                <div>
                  <p className={style.descripcion}>Tipo de Plan</p>
                  <p className={style.data}>Basico</p> 
                </div>  
                <div>
                  <p className={style.descripcion}>Formato de Pago</p>
                  <p className={style.data}>Transferencia</p> 
                </div>           
            </div>           
        </div>
        <div className={style.contentCenter}>
          <p className={style.title}>Monto y Pago</p>
            <div className={style.mesesPagados}>
                <div className={style.mesPagado}>
                  <p className={style.descripcion}>Enero</p>
                  <p className={style.montoPagado}>250.00</p>
                </div>
                <div className={style.mesPagado}>
                  <p className={style.descripcion}>Febrero</p>
                  <p className={style.montoPagado}>250.00</p>
                </div>
                <div className={style.mesPagado}>
                  <p className={style.descripcion}>Marzo</p>
                  <p className={style.montoPagado}>250.00</p>
                </div>
                <div className={style.mesPagado}>
                  <p className={style.descripcion}>Abril</p>
                  <p className={style.montoPagado}>250.00</p>
                </div>
            </div>
            <div className={style.montoEnMoneda}>
                <div className={`${style.mesPagado_center} ${style.monedaBs}`}>
                  <p>Precio Total Bs</p>
                  <p>750.00</p>
                </div>
                <div className={`${style.mesPagado_center} ${style.monedaDolar}`}>
                  <p>Precio $</p>
                  <p>32.10 $</p>
                </div>
            </div>
        </div>
        <div className={style.contentBottom}>
            <button type='button' onClick={() => router.push('/clientes/confirmar/')} className={style.confirmBtn}>
              { isConfirmarPage ? 'Imprimir Contrato' : 'Confirmar'}
            </button>
            <p className={style.cancelarBtn} onClick={() => router.push('/clientes/pago')}>
              { isConfirmarPage ? 'Salir' : 'Cancelar'}
            </p>
        </div>
    </div>
  )
}

export default CardRightDatosPagos