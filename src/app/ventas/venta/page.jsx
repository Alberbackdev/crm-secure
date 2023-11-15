
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import FormDifunto from "@/src/components/ventas/FormDifunto/FormDifunto";
import NumerosServicios from "@/src/components/ventas/NumeroServicios/NumerosServicios";
import style from '@/src/styles/stylePages.module.css'

//registar /actualizar venta

export default function Ventas() {
  return (
    <>
      <BarSeguimientoProceso currentPage={'Datos Del Difunto'} useBarTo={'Ventas'} />
      <div className={style.pageDifuntoVenta}>
        <FormDifunto />
        {/* <NumerosServicios /> */}
      </div>
    </>
  );
}
