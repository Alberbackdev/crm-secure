
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import ContainerPrinc from "@/src/components/LayoutFolder/Layout";
import FormResponsable from "@/src/components/ventas/FormResponsable/FormResponsable";
import NumerosServicios from "@/src/components/ventas/NumeroServicios/NumerosServicios";


export default function Responsable() {
  return (
    <ContainerPrinc>
      <BarSeguimientoProceso currentPage={'Datos Responsable del Servicio'} useBarTo={'Ventas'} />
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "1.7rem",
          justifyContent: "space-evenly",
        }}
      >
        <FormResponsable />
        <NumerosServicios />
      </div>
    </ContainerPrinc>
  );
}
