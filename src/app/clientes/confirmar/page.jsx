
import CardRightDatosPagos from "@/src/components/CardRightDatosPagos/CardRightDatosPagos"
import VistaPreviaPago from "@/src/components/VistaPreviaPago/VistaPreviaPago"
import style from "@/src/components/CardRightDatosPagos/cardRightDatosPagos.module.css";
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"



function Confirmacion() {
    return (
      <>
        <BarSeguimientoProceso currentPage={'Confirmacion'} useBarTo={'Clientes'} />
        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          <VistaPreviaPago />
          <CardRightDatosPagos />
        </div>
      </>      
    );
}

export default Confirmacion