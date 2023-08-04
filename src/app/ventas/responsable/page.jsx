
import ContainerPrinc from "@/src/components/LayoutFolder/Layout";
import FormResponsable from "@/src/components/ventas/FormResponsable/FormResponsable";
import NumerosServicios from "@/src/components/ventas/NumeroServicios/NumerosServicios";


export default function Responsable() {
  return (
    <ContainerPrinc>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "3rem",
          justifyContent: "space-evenly",
        }}
      >
        <FormResponsable />
        <NumerosServicios />
      </div>
    </ContainerPrinc>
  );
}
