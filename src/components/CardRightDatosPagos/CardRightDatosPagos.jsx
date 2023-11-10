"use client"
import { useRouter, usePathname } from 'next/navigation'
import style from './cardRightDatosPagos.module.css'
import { useSelector } from 'react-redux';


//componendte para confirmar los datos de pago
function CardRightDatosPagos({ meses }) {
  const valuesPago = useSelector(state => state.pago.data); // state es el reducer y con el punto se accede al nombre se accede al slice
  const router = useRouter();
  const pathname = usePathname();
  const isConfirmarPage = pathname.includes("confirmar");
  const isFacturaPage = pathname === '/facturas/cliente';

  const total = valuesPago.full_payment_bs
  const totalDolar = valuesPago.full_payment_dollar;

  return (
    <div className={style.container}>
      <h4 className={style.title}>Datos del Pago</h4>

      <div className={style.contentTop}>
        <div>
          <p className={style.descripcion}>Fecha</p>
          <p className={style.data}>
            {valuesPago.date_pay}
          </p>
        </div>
        <p className={style.descripcion}>Tipo de Cambio</p>
        <p className={style.data}>
          {valuesPago.type_of_change}
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
              {valuesPago.type_pay}
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
              {total + "Bs"}
            </div>
            <div className={`${style.mesPagado_center} ${style.monedaDolar}`}>
              <p>Precio $</p>
              <p>{totalDolar.toFixed(2) + "$"}</p>
            </div>
          </div>
        </div>
      </div>
      {
        !isFacturaPage &&
        <div className={style.contentBottom}>
          <button type="submit" className={style.confirmBtn}
            onClick={() => isConfirmarPage ? router.push("/facturas/cliente") : router.push("/clientes/confirmar")}
          >
            {isConfirmarPage ? "Imprimir Contrato" : "Confirmar"}
          </button>
          <p
            className={style.cancelarBtn}
            onClick={() => isConfirmarPage ? router.push("/clientes") :  router.push("/clientes/pago")}
          >
            {isConfirmarPage ? "Salir" : "Cancelar"}
          </p>
        </div>
      }
    </div>
  );
}

export default CardRightDatosPagos