
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import ContainerPrinc from "@/src/components/LayoutFolder/Layout";
import FormDifunto from "@/src/components/ventas/FormDifunto/FormDifunto";
import NumerosServicios from "@/src/components/ventas/NumeroServicios/NumerosServicios";

//registar /actualizar venta

export default function Ventas() {
  return (
    <ContainerPrinc>
      <BarSeguimientoProceso currentPage={'Datos Del Difunto'} useBarTo={'Ventas'} />
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "1.7rem",
          justifyContent: "space-evenly",
        }}
      >
        <FormDifunto />
        <NumerosServicios />
      </div>
    </ContainerPrinc>
  );
}
