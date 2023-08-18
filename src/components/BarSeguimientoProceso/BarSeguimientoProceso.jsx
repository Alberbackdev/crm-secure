import Image from 'next/image'
import style from './BarSeguimientoProceso.module.css'

const namesPageVentas = ['Datos Del Difunto', 'Datos Responsable del Servicio', 'Servicio', 'Confirmacion'];
const namesPageClientes = ['Datos Principales', 'Poliza', 'Pago', 'Confirmacion'];

function BarSeguimientoProceso({currentPage, useBarTo}) {
  const listaARecorrer = useBarTo === 'Ventas' ? namesPageVentas : namesPageClientes;
  const indexCurrentPage = listaARecorrer.indexOf(currentPage)
  return (
    <div className={style.content}>
        {
            listaARecorrer.map((namePage, index) => (
                <>
                    <div className={style.process} key={namePage}> 
                        <div className={`${style.circleIndicator} ${index <= indexCurrentPage ? style.circleIndicatorActive : null}`}>
                            <Image src='/checkWhiteIcon.png' alt='check White Icon' width={16} height={13} />
                        </div>
                        <p className={`${index <= indexCurrentPage ? style.nameActive : style.nameInactive}`}>{namePage}</p>
                    </div>
                    { index < 3 && <div className={style.separator}></div>}
                </>
            ))
        }
    </div>
  )
}

export default BarSeguimientoProceso