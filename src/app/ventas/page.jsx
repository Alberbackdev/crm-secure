
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import ContainerPrinc from "@/src/components/LayoutFolder/Layout";
import FormDifunto from "@/src/components/ventas/FormDifunto/FormDifunto";
import NumerosServicios from "@/src/components/ventas/NumeroServicios/NumerosServicios";
import style from '@/src/styles/stylePages.module.css'

//registar /actualizar venta

export default function Ventas() {
  return (
    <ContainerPrinc>
      <BarSeguimientoProceso currentPage={'Datos Del Difunto'} useBarTo={'Ventas'} />
      <div className={style.pageDifuntoVenta}>
        <FormDifunto />
        <NumerosServicios />
      </div>
    </ContainerPrinc>
  );
}
