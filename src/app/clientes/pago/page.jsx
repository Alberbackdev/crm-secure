"use client";
import ContainerSelectDatosPagos from "@/src/components/ContainerSelectDatosPagos/ContainerSelectDatosPagos"
import CardRightDatosPagos from "@/src/components/CardRightDatosPagos/CardRightDatosPagos"
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"


export default function Pagos({ params, searchParams }) {
    console.log("Params:", params)
    console.log("searchParams:", searchParams);
  return (
    <>
      <BarSeguimientoProceso currentPage={'Pago'} useBarTo={'Clientes'} />

      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "3rem",
          justifyContent: "space-evenly",
        }}
      >
        <ContainerSelectDatosPagos />
        <CardRightDatosPagos />
      </div>
    </>
  );
}
