
import CardRightDatosPagos from "@/src/components/CardRightDatosPagos/CardRightDatosPagos"
import VistaPreviaPago from "@/src/components/VistaPreviaPago/VistaPreviaPago"
import style from "@/src/components/CardRightDatosPagos/cardRightDatosPagos.module.css";
import { useRouter } from "next/navigation";



function Confirmacion() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "3rem",
          justifyContent: "space-evenly",
        }}
      >
        <VistaPreviaPago />
        <CardRightDatosPagos />
      </div>
      
    );
}

export default Confirmacion