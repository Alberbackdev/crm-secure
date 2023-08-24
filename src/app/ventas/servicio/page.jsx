
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import CardRightDatosVentas from "@/src/components/CardRightDatosVentas/CardRightDatosVentas"
import ContainerPrinc from "@/src/components/LayoutFolder/Layout";
import FormServicio from "@/src/components/ventas/FormServicio/FormServicio"
import NumerosServicios from "@/src/components/ventas/NumeroServicios/NumerosServicios";


export default function Servicio() {
  return (
    <ContainerPrinc>
      <BarSeguimientoProceso currentPage={'Servicio'} useBarTo={'Ventas'} />
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "1.7rem",
          justifyContent: "space-evenly",
        }}
      >
        <FormServicio />
        <CardRightDatosVentas />
      </div>
    </ContainerPrinc>
  );
}
