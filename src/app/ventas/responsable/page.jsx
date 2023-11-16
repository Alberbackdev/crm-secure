
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import FormResponsable from "@/src/components/ventas/FormResponsable/FormResponsable";
import NumerosServicios from "@/src/components/ventas/NumeroServicios/NumerosServicios";
import style from '@/src/styles/stylePages.module.css'


export default function Responsable() {
  return (
    <>
      <BarSeguimientoProceso currentPage={'Datos Responsable del Servicio'} useBarTo={'Ventas'} />
      <div className={style.pageResponsableVenta}>
        <FormResponsable />
        {/* <NumerosServicios /> */}
      </div>
    </>
  );
}
