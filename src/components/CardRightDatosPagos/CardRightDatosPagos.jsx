"use client";
import { useRouter, usePathname } from "next/navigation";
import style from "./cardRightDatosPagos.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createClientAction } from "@/src/services/clienteServices";
import { createPolizeAction } from "@/src/services/polizaServices";
import { createPagoAction } from "@/src/services/pagoServices";
import { resetPagoSlice } from "@/src/redux/slices/pagoReducer"
import { resetPolizaSlice } from "@/src/redux/slices/polizaReducer"
import { createPayeeAction } from "@/src/services/payeesServices"

//componendte para confirmar los datos de pago
function CardRightDatosPagos() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isConfirmarPage = pathname.includes("confirmar");
  const isFacturaPage = pathname === "/facturas/cliente";

  const valuesClient = useSelector((state) => state.client.data);
  const valuesPoliza = useSelector((state) => state.poliza.data);
  const allBeneficiarios = useSelector((state) => state.beneficiario.data);
  const  { updatingPagoData, data: valuesPago } = useSelector((state) => state.pago); // state es el reducer y con el punto se accede al nombre se accede al slice
 
  const total = +valuesPago.full_payment_bs;
  const totalDolar = +valuesPago.full_payment_dollar;

  const cleanAllSlices = () => { // limpiar los slices    
    dispatch(resetClientSlice());
    dispatch(resetPolizaSlice());
    dispatch(resetPagoSlice());
  }

  const nextButton = async () => { // verificar si estan editando para que no trate de crear registros
    try {
      if(updatingPagoData) { // aca hacer el registro solamente de pago
        await createPagoAction({...valuesPago, clientId: valuesClient._id, polizaId: valuesPoliza._id});
        const arrayBeneficiariosTransformado = allBeneficiarios.map(beneficiario => ({...beneficiario, clientId: valuesClient._id, polizaId: valuesPoliza._id}))
        await Promise.all( // registrando los beneficiarios
          arrayBeneficiariosTransformado.map(async (beneficiario) => {
            return await createPayeeAction(beneficiario)
          })
        )
      } else { // aca estan creando, por ende se hacen los cuatros registros
        const { data } = await createClientAction(valuesClient); 
        const {data: dataPoliza} = await createPolizeAction({...valuesPoliza, clientId: data.newClient._id});

        const arrayBeneficiariosTransformado = allBeneficiarios.map(beneficiario => ({...beneficiario, clientId: data.newClient._id, polizaId: dataPoliza.data._id}))
        await Promise.all( // registrando los beneficiarios
          arrayBeneficiariosTransformado.map(async (beneficiario) => {
            return await createPayeeAction(beneficiario)
          })
        )
        await createPagoAction({...valuesPago, clientId: data.newClient._id, polizaId: dataPoliza.data._id});
      }

      isConfirmarPage
        ? router.push("/facturas/cliente")
        : router.push("/clientes/confirmar");     
    } catch (error) {
      console.log(error);
    }
  };

  const cancelButton = () => {
    if(isConfirmarPage) {
      cleanAllSlices();
      router.push("/clientes")
    } else {
      router.push("/clientes/pago")
    }
  }

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
            <p className={style.data} style={{textAlign: "right"}}>{valuesPago.type_of_change}</p>
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
                  {valuesPoliza.codigoPoliza}
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
                  {valuesPago.status_pay}
                </p>
              </div>
            </div>
          </>
        )}
        <div className={style.horizontal}>
          <div>
            <p className={style.descripcion}>Tipo de Plan</p>
            <p className={style.data}>
              {valuesPoliza.type_polize}
            </p>
          </div>
          <div>
            <p className={style.descripcion} style={{textAlign: "right"}}>Formato de Pago</p>
            <p className={style.data}>
              {valuesPago.type_pay}
            </p>
          </div>
        </div>
      </div>
      <div className={style.contentCenter}>
        <p className={style.title}>Monto y Pago</p>
        <div className={style.mesesPagados}>
          <div className={style.listaMeses}>
            {valuesPago.month_pay?.map((l, i) => (
              <div className={style.mesPagado} key={i}>
                <p className={style.descripcion}>{l.nombreMes}</p>
                <p className={style.montoPagado}>{l.monto}</p>
              </div>
            ))}
          </div>

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
            onClick={nextButton}
          >
            {isConfirmarPage ? "Imprimir Contrato" : "Confirmar"}
          </button>
          <p
            className={style.cancelarBtn}
            onClick={cancelButton}            
          >
            {isConfirmarPage ? "Salir" : "Cancelar"}
          </p>
        </div>
      )}
    </div>
  );
}

export default CardRightDatosPagos;
