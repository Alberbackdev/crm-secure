'use client'
import { useRouter } from "next/navigation";
import style from "./formPolize.module.css";
import { useForm } from "../../utils/useForm";
import { TypePolizeOptions, VendedoresOptions } from "../../utils/optionsForm";
import { dataToCreate } from "@/src/redux/slices/polizaReducer"
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { putMontoToMesesPagados } from "@/src/redux/slices/pagoReducer"
import { updatePolizeAction } from "@/src/services/polizaServices"
import { getPagoAPI } from "@/src/services/pagoServices"


//This is form for new client

export const FormPolize = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const valuesPoliza = useSelector(state => state.poliza)
  const allBeneficiarios = useSelector((state) => state.beneficiario.data);

  const { values, handleInputChange } = useForm(valuesPoliza.data);

  const sendPolize = async (ev) => {
    ev.preventDefault()
    if(!valuesPoliza.updatingPolizaData){ // No edicion
      dispatch(dataToCreate(values));
      return router.push(`/clientes/pago`);
    }
    // Codigo de edicion
    try {
      const {data, status} = await updatePolizeAction(values);
      console.log('proceso de update',data);

      if (status === 200) router.push(`/clientes/pago`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if ( valuesPoliza.updatingPolizaData ) {
      async function getPagoByUser() {
          const {data} =  await getPagoAPI(values.clientId); //Obtener data del pago del cliente a editar.
          const estructuraDatos = { 
            type_pay:'',
            date_pay:'',
            type_of_change:'',
            month_pay: data.pagos.month_pay.flat(),
            status_pay:'',
            full_payment_bs: 0,
            full_payment_dollar: 0,
            clientId: data.pagos.clientId,
            polizaId: data.pagos.polizaId
          }
          dispatch(putMontoToMesesPagados(estructuraDatos))
      }
      getPagoByUser()
    }
  }, [])
  

  const tiposLabel = TypePolizeOptions.map((l, i) => (
    <option value={l.value} key={i}>
      {l.label}
    </option>
  ));
  const vendedorLabel = VendedoresOptions.map((l, i) => (
    <option value={l.value} key={i}>
      {l.label}
    </option>
  ));

  return (
    <div className={style.container}>
      <h1 className={style.title}>Ingrese los Datos de la Poliza</h1>
      <form onSubmit={sendPolize} className={style.formContent}>
      <div className={style.group}>
        <div className={style.groupChild}>
            <label>Codigo de Poliza</label>
            <input
              name='codigoPoliza'
              type='text'
              placeholder={!values.poliza ? "O-1234" : values.poliza}
              required
              className={style.inputForm}
              value={values.codigoPoliza}
              onChange={handleInputChange}
            />
        </div>
        <div className={style.groupChild}>
            <label>Tipo de Plan</label>
            <select
              name='type_polize'
              required
              className={style.inputForm}
              value={values.type_polize}
              onChange={handleInputChange}
            >
              <option>Seleccione...</option>
              {tiposLabel}
            </select>
        </div>
      </div>
        
        <div className={style.field}>
          <label>Nombre del Cobrador/Vendedor</label>
          <select
            name='seller'
            required
            className={style.inputForm}
            value={values.seller}
            onChange={handleInputChange}
          >
            <option>Seleccione...</option>
            {vendedorLabel}
          </select>
        </div>
        
        <div className={style.field}>
          <label>Fecha de Contrato</label>
          <input
            name='dateofcontract'
            type='date'
            required
            className={style.inputForm}
            value={values.dateofcontract}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.field}>
          <label>Ciudad</label>
          <input
            name='city_contract'
            type='text'
            placeholder='Ejemplo: Valera'
            required
            className={style.inputForm}
            value={values.city_contract}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.buttons}>
          <button
            type='button'
            className='btn-primary'
            onClick={() => router.push("/clientes/cliente")}
          >
            Atras
          </button>
          {
            allBeneficiarios.length < 5 
              ? <p className={style.mensajeLimitante}>Agrega al menos 5 beneficiarios para continuar.</p>
              : <button type='submit' className='btn-primary'>
                  Siguiente
                </button>
          }          
        </div>
      </form>
    </div>
  );
};
