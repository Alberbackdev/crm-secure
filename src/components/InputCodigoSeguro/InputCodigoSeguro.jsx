import style from "./InputCodigoSeguro.module.css";
import { useForm } from "@/src/utils/useForm";
import { createPolizeAction } from "@/src/services/polizaServices";
//import { useRouter } from 'next/navigation';

export const InputCodigoSeguro = ({ setPoliza, poliza }) => {
  const { values, handleInputChange, reset } = useForm({ codigoPoliza: "" });

  //actua como actualizador y reseteo de forms
  const sendCodigo = async (ev) => {
    try {
      const res = await createPolizeAction(ev, values, reset);
      console.log(res);

      if (res.status === 201) {
        const { data } = res.data;
        setPoliza({ codigoPoliza: data.codigoPoliza, _id: data._id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={sendCodigo} className={style.formContent}>
        <div className={style.group}>
          <div className={style.groupChild}>
            <label>Codigo de Poliza</label>
            <input
              name="codigoPoliza"
              type="text"
              placeholder="O-1000"
              className="rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.codigoPoliza}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn-primary">
              Guardar
            </button>
          </div>
        </div>
      </form>
      <div>
        <h2>{poliza.codigoPoliza}</h2>
      </div>
    </div>
  );
};
