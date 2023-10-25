
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import CardRightDatosVentas from "@/src/components/CardRightDatosVentas/CardRightDatosVentas"
import ContainerPrinc from "@/src/components/LayoutFolder/Layout";
import FormServicio from "@/src/components/ventas/FormServicio/FormServicio"

export default function Servicio() {
  return (
    <ContainerPrinc>
      <BarSeguimientoProceso currentPage={'Servicio'} useBarTo={'Ventas'} />
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "1.3rem",
          justifyContent: "space-evenly",
        }}
      >
        <FormServicio />
        <CardRightDatosVentas />
      </div>
    </ContainerPrinc>
  );
}
