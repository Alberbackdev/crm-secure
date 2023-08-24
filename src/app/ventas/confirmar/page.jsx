
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import CardRightDatosVentas from "@/src/components/CardRightDatosVentas/CardRightDatosVentas"
import ContainerPrinc from "@/src/components/LayoutFolder/Layout";
import VistaPreviaVentas from "@/src/components/VistaPreviaVentas/VistaPreviaVentas"


export default function ConfirmarVenta() {
  return (
    <ContainerPrinc>
      <BarSeguimientoProceso currentPage={'Confirmacion'} useBarTo={'Ventas'} />
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "1.7rem",
          justifyContent: "space-evenly",
        }}
      >
        <VistaPreviaVentas />
        <CardRightDatosVentas />
      </div>
    </ContainerPrinc>
  );
}
