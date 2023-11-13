
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import CardRightDatosVentas from "@/src/components/CardRightDatosVentas/CardRightDatosVentas"
import FormServicio from "@/src/components/ventas/FormServicio/FormServicio"
import style from '@/src/styles/stylePages.module.css'

export default function Servicio() {
  return (
    <>
      <BarSeguimientoProceso currentPage={'Servicio'} useBarTo={'Ventas'} />
      <div className={style.pageServicioVentas}>
        <FormServicio />
        <CardRightDatosVentas />
      </div>
    </>
  );
}
