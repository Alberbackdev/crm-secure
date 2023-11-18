import ContainerSelectDatosPagos from "@/src/components/ContainerSelectDatosPagos/ContainerSelectDatosPagos"
import CardRightDatosPagos from "@/src/components/CardRightDatosPagos/CardRightDatosPagos"
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import style from '@/src/styles/stylePages.module.css'

export default function Pagos() {
 
  return (
    <>
      <BarSeguimientoProceso currentPage={"Pago"} useBarTo={"Clientes"} />

      <div className={style.pagoPage}>
        <ContainerSelectDatosPagos />
        <CardRightDatosPagos />
      </div>
    </>
  );
}
