"use client";
import { useRouter, usePathname } from "next/navigation";
import style from "./cardRightDatosPagos.module.css";
import { useSelector } from "react-redux";
import { createClientAction } from "@/src/services/clienteServices";
import { createPolizeAction } from "@/src/services/polizaServices";
import { createPagoAction } from "@/src/services/pagoServices";

//componendte para confirmar los datos de pago
function CardRightDatosPagos({ meses }) {
  const valuesClient = useSelector((state) => state.client.data);
  const valuesPoliza = useSelector((state) => state.poliza.data);
  const valuesPago = useSelector((state) => state.pago.data); // state es el reducer y con el punto se accede al nombre se accede al slice
  const router = useRouter();
  const pathname = usePathname();
  const isConfirmarPage = pathname.includes("confirmar");
  const isFacturaPage = pathname === "/facturas/cliente";

  const total = valuesPago.full_payment_bs;
  const totalDolar = valuesPago.full_payment_dollar;

  console.log(valuesPoliza);

  const sendPolize = async (ev) => {
    try {
      const cliente = await createClientAction(ev, valuesClient);
      const cpoliza = await createPolizeAction(ev, valuesPoliza);
      const cpago = await createPagoAction(ev, valuesPago);
      console.log(cliente.status, cpoliza.status, cpago.status);

      if (
        cliente.status === 201 &&
        cpoliza.status === 201 &&
        cpago.status === 201
      ) {
        isConfirmarPage
          ? router.push("/facturas/cliente")
          : router.push("/clientes/confirmar");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <h4 className={style.title}>Datos del Pago</h4>

      <div className={style.contentTop}>
        <div className={style.horizontal}>
          <div>
            <p className={style.descripcion}>Fecha</p>
            <p className={style.data}>{valuesPago.date_pay}</p>
          </div>
          <div>
            <p className={style.descripcion}>Tipo de Cambio</p>
            <p className={style.data}>{valuesPago.type_of_change}</p>
          </div>
        </div>

        {isConfirmarPage && (
          <>
            <div className={style.horizontal}>
              <div>
                <p className={style.descripcion}>N° de Meses que Pago</p>
                <p className={style.data}>
                  {!valuesPago.month_pay ? 0 : valuesPago.month_pay.length}
                </p>
              </div>

              <div>
                <p className={style.descripcion}>Codigo de Poliza</p>
                <p className={style.data} style={{ textAlign: "right" }}>
                  {!valuesPoliza.codigoPoliza
                    ? undefined
                    : valuesPoliza.codigoPoliza}
                </p>
              </div>
            </div>
            <div className={style.horizontal}>
              <div>
                <p className={style.descripcion}>Nombre y Apellido</p>
                <p className={style.data}>{valuesClient.name + " " + valuesClient.lastname}</p>
              </div>
              <div className={style.field}>
                <p className={style.descripcion}>Status</p>
                <p className={style.data}>
                  {!valuesPoliza.status_pay
                    ? "undefined"
                    : valuesPoliza.status_pay}
                </p>
              </div>
            </div>
          </>
        )}
        <div className={style.horizontal}>
          <div>
            <p className={style.descripcion}>Tipo de Plan</p>
            <p className={style.data}>
              {!valuesPoliza.type_polize
                ? "undefined"
                : valuesPoliza.type_polize}
            </p>
          </div>
          <div>
            <p className={style.descripcion}>Formato de Pago</p>
            <p className={style.data}>
              {!valuesPago.type_pay ? undefined : valuesPago.type_pay}
            </p>
          </div>
        </div>
      </div>
      <div className={style.contentCenter}>
        <p className={style.title}>Monto y Pago</p>
        <div className={style.mesesPagados}>
          {valuesPago.month_pay?.map((l, i) => (
            <div className={style.mesPagado} key={i}>
              <p className={style.descripcion}>{l.mes}</p>
              <p className={style.montoPagado}>{l.value}</p>
            </div>
          ))}

          <div className={style.montoEnMoneda}>
            <div className={`${style.mesPagado_center} ${style.monedaBs}`}>
              <p>Precio Total Bs</p>
              {total + "Bs"}
            </div>
            <div className={`${style.mesPagado_center} ${style.monedaDolar}`}>
              <p>Precio $</p>
              <p>{totalDolar.toFixed(2) + "$"}</p>
            </div>
          </div>
        </div>
      </div>
      {!isFacturaPage && (
        <div className={style.contentBottom}>
          <button
            type="submit"
            className={style.confirmBtn}
            onClick={sendPolize}
          >
            {isConfirmarPage ? "Imprimir Contrato" : "Confirmar"}
          </button>
          <p
            className={style.cancelarBtn}
            onClick={() =>
              isConfirmarPage
                ? router.push("/clientes")
                : router.push("/clientes/pago")
            }
          >
            {isConfirmarPage ? "Salir" : "Cancelar"}
          </p>
        </div>
      )}
    </div>
  );
}

export default CardRightDatosPagos;
