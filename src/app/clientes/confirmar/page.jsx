import style from '@/src/styles/stylePages.module.css'
import CardRightDatosPagos from "@/src/components/CardRightDatosPagos/CardRightDatosPagos"
import VistaPreviaPago from "@/src/components/VistaPreviaPago/VistaPreviaPago"
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"

function Confirmacion() {
    return (
      <>
        <BarSeguimientoProceso currentPage={'Confirmacion'} useBarTo={'Clientes'} />
        <div className={style.confirmarPageCliente}>        
          <VistaPreviaPago />
          <CardRightDatosPagos />
        </div>
      </>      
    );
}

export default Confirmacion