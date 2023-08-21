'use client'
import { useRouter } from "next/navigation";
import style from "./formPolize.module.css";
import { useForm } from "../../utils/useForm";
import { TypePolizeOptions, VendedoresOptions } from "../../utils/optionsForm";
import { updatePolizeAction } from "../../services/polizaServices";

//This is form for new client

export const FormPolize = ({poliza, client}) => {
  const router = useRouter();
  console.log("Poliza:", poliza.polizaId);
  console.log("Cliente:", client);
  //llama a la funcion para actualizar el estado del las entradas
  const { values, handleInputChange, reset } = useForm({
    type_polize: "",
    seller: "",
    dateofcontract: "",
    city_contract: "",
  });
  //actua como actualizador y reseteo de forms
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
        <div className={style.field}>
          <label>Tipo de Plan</label>
          <select
            name="type_polize"
            required
            className={style.inputForm}
            value={values.type_polize}
            onChange={handleInputChange}
          >
            <option>Seleccione...</option>
            {tiposLabel}
          </select>
        </div>

        <div className={style.field}>
          <label>Nombre del Cobrador/Vendedor</label>
          <select
            name="seller"
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
            name="dateofcontract"
            type="date"
            className={style.inputForm}
            value={values.dateofcontract}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.field}>
          <label>Ciudad</label>
          <input
            name="city_contract"
            type="text"
            placeholder="Ejemplo: Valera"
            className={style.inputForm}
            value={values.city_contract}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.buttons}>
          <button
            type="button"
            className="btn-primary"
            onClick={() => router.push("/clientes/crear")}
          >
            Atras
          </button>
          <button type="submit" className="btn-primary">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};
