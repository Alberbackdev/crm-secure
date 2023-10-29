'use client'
import { useRouter } from "next/navigation";
import style from "./formPolize.module.css";
import { useForm } from "../../utils/useForm";
import { TypePolizeOptions, VendedoresOptions } from "../../utils/optionsForm";
import { dataToCreate } from "@/src/redux/slices/polizaReducer"
import { useDispatch,useSelector } from "react-redux"


//This is form for new client

export const FormPolize = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const valuesPoliza = useSelector(state => state.poliza.data)

  const { values, handleInputChange, reset } = useForm(valuesPoliza);
  //actua como actualizador y reseteo de forms
  const sendPolize = (ev) => {
    ev.preventDefault()
    dispatch(dataToCreate(values));
    router.push(`/clientes/pago`);
    // try {
    //   const res = await updatePolizeAction(ev, values, poliza.polizaId);
    //   console.log(res);

    //   if (res.status === 200) {
    //     router.push(`/clientes/pago/${client.id}?poliza=${poliza.polizaId}`);
    //     router.refresh();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

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
              className=' rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
          <button type='submit' className='btn-primary'>
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};
