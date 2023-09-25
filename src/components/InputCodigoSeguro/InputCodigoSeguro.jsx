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
    <div>
      <form onSubmit={sendCodigo} className={style.formContent}>
        <div className={style.group}>
          <div className={style.groupChild}>
            <label>Codigo de Poliza</label>
            <input
              name="codigoPoliza"
              type="text"
              placeholder={!values.poliza ? "O-1234" : values.poliza}
              required
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.codigoPoliza}
              onChange={handleInputChange}
            />
          </div>

          <div className={style.buttons}>
            <button
              type="submit"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              {!poliza.codigoPoliza
                ? "Guardar Poliza Nueva"
                : `Poliza ${poliza.codigoPoliza} Creada`}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
