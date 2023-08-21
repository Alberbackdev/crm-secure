"use client";

import { useForm } from "../../utils/useForm";
import { createPayeeAction, getBeneficiariosAPI } from "../../services/payeesServices";
import style from "./FormBeneficiario.module.css";
import { useRouter } from "next/navigation";

//This is form for new client

export const FormBeneficiario = ({ setModalFormBeneficiario, param }) => {
  const router = useRouter()
  console.log(param);
  //llama a la funcion para actualizar el estado del input
  const { values, handleInputChange, reset } = useForm({
    name_payee: "",
    cidentified_payee: "",
    age_payee: "",
    dateofbirth: "",
    cliente: `${param.cliente}`,
    poliza: `${param.poliza}`,
  });
  //actua como actualizador y reseteo de forms
  
  const sendPayees = async(ev) => {
    try {
        const res = await createPayeeAction(ev, values, reset);
        console.log(res)
        //const {data} = await res.json();
        
        if (res.status === 201) {
          router.refresh();
        }
      } catch (error) {
        console.log(error)
        
      }
  }

  const cerrarModal = () => {
    // usar la funcion reset para limpiar el estado
    setModalFormBeneficiario(false);
  };

  return (
    <div className={style.Backdrop} onClick={cerrarModal}>
      <form
        onSubmit={sendPayees}
        className={style.container}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className={style.title}>Registro de Beneficiario</h1>

        <div className={style.field}>
          <label>Nombre y Apellido</label>
          <input
            name="name_payee"
            type="text"
            placeholder="Nombre Completo"
            required
            className={style.inputForm}
            value={values.name_payee}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.field}>
          <label>Cedula de Identidad</label>
          <input
            name="cidentified_payee"
            type="text"
            placeholder="V- 12345678"
            required
            className={style.inputForm}
            value={values.cidentified_payee}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.field}>
          <label>Edad</label>
          <input
            name="age_payee"
            type="number"
            placeholder="18"
            required
            className={style.inputForm}
            value={values.age_payee}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.field}>
          <label>Fecha de Nacimiento</label>
          <input
            name="dateofbirth"
            type="date"
            required
            className={style.inputForm}
            value={values.dateofbirth}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.buttons}>
          <button type="button" className="btn-primary" onClick={cerrarModal}>
            Cancelar
          </button>
          <button type="submit" className="btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
