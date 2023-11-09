"use client"
import { useRouter, usePathname } from 'next/navigation'
import style from './cardRightDatosPagos.module.css'

//componendte para confirmar los datos de pago
function CardRightDatosPagos({ meses, dataP }) {
  const router = useRouter();
  const pathname = usePathname();
  const isConfirmarPage = pathname.includes("confirmar");

//hacer que aparezca el mes y el monto

  const sendPolize = async (ev) => {
    try {
      const res = await updatePolizeAction(ev, values, poliza.polizaId);
      console.log(res);

      if (res.status === 200) {
        router.push(`/clientes/pago/${client.id}?poliza=${poliza.polizaId}`);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* date_pay: "";
  status_pay: "";
  type_of_change: "";
  type_pay: ""; */

  const total = meses.length ? meses.reduce((acumulador, actual) => acumulador + +actual?.value, 0) : 0;
  const totalDolar = total / dataP.type_of_change

  return (
    <div className={style.container}>
      <h4 className={style.title}>Datos del Pago</h4>

      <div className={style.contentTop}>
        <div>
          <p className={style.descripcion}>Fecha</p>
          <p className={style.data}>
            {!dataP?.date_pay ? " " : dataP.date_pay}
          </p>
        </div>
        <p className={style.descripcion}>Tipo de Cambio</p>
        <p className={style.data}>
          {!dataP?.type_of_change ? " " : dataP.type_of_change}
        </p>
        {isConfirmarPage && (
          <div className={style.horizontal}>
            <div>
              <p className={style.descripcion}>N° de Meses que Pago</p>
              <p className={style.data}>4</p>
            </div>
            <div>
              <p className={style.descripcion}>N° de Meses a Deber</p>
              <p className={style.data} style={{ textAlign: "right" }}>
                9
              </p>
            </div>
          </div>
        )}
        <div className={style.horizontal}>
          <div>
            <p className={style.descripcion}>Tipo de Plan</p>
            <p className={style.data}>Basico</p>
          </div>
          <div>
            <p className={style.descripcion}>Formato de Pago</p>
            <p className={style.data}>
              {!dataP?.type_pay ? " " : dataP.type_pay}
            </p>
          </div>
        </div>
      </div>
      <div className={style.contentCenter}>
        <p className={style.title}>Monto y Pago</p>
        <div className={style.mesesPagados}>
          {meses?.map((l) => (
            <div className={style.mesPagado} key={l}>
              <p className={style.descripcion}>{l.mes}</p>
              <p className={style.montoPagado}>{l.value}</p>
            </div>
          ))}

          <div className={style.montoEnMoneda}>
            <div className={`${style.mesPagado_center} ${style.monedaBs}`}>
              <p>Precio Total Bs</p>
              {total + ' Bs'}
            </div>
            <div className={`${style.mesPagado_center} ${style.monedaDolar}`}>
              <p>Precio $</p>
              <p>{totalDolar ? totalDolar.toFixed(2) : '0$'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.contentBottom}>
        <button
          type="button"
          onClick={() => router.push("/clientes/confirmar/")}
          className={style.confirmBtn}
        >
          {isConfirmarPage ? "Imprimir Contrato" : "Confirmar"}
        </button>
        <p
          className={style.cancelarBtn}
          onClick={() => router.push("/clientes/pago")}
        >
          {isConfirmarPage ? "Salir" : "Cancelar"}
        </p>
      </div>
    </div>
  );
}

export default CardRightDatosPagos