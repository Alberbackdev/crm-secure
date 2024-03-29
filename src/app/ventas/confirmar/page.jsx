
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import CardRightDatosVentas from "@/src/components/CardRightDatosVentas/CardRightDatosVentas"
import VistaPreviaVentas from "@/src/components/VistaPreviaVentas/VistaPreviaVentas"
import style from '@/src/styles/stylePages.module.css'

export default function ConfirmarVenta() {
  return (
    <>
      <BarSeguimientoProceso currentPage={'Confirmacion'} useBarTo={'Ventas'} />
      <div className={style.pageConfirmarVentas}>
        <VistaPreviaVentas />
        <CardRightDatosVentas />
      </div>
    </>
  );
}
