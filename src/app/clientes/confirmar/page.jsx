
import CardRightDatosPagos from "@/src/components/CardRightDatosPagos/CardRightDatosPagos"
import VistaPreviaPago from "@/src/components/VistaPreviaPago/VistaPreviaPago"
import style from "@/src/components/CardRightDatosPagos/cardRightDatosPagos.module.css";
import { useRouter } from "next/navigation";



function Confirmacion() {
    const router = useRouter()
    return (
      <>
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
          <div className={style.contentBottom}>
            <button
              type="button"
              onClick={() => router.push("/clientes")}
              className={style.confirmBtn}
            >
              Confirmar
            </button>
            <p
              className={style.cancelarBtn}
              onClick={() => router.push("/clientes/pagos")}
            >
              Cancelar
            </p>
          </div>
        </div>
      </>
    );
}

export default Confirmacion