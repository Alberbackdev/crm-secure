"use client";

import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../utils/useForm";
import style from "./FormBeneficiario.module.css";
import { putDataBeneficiarios, updateBeneficiarioInArray } from "@/src/redux/slices/beneficiarioReducer"


export const FormBeneficiario = ({ setModalFormBeneficiario }) => {
  const {updateBeneficiario, dataBeneficiarioToUpdate} = useSelector((state) => state.beneficiario);
  const dispatch = useDispatch();
  const { values, handleInputChange, reset } = useForm(dataBeneficiarioToUpdate);

  const cerrarModal = () => {
    reset()
    setModalFormBeneficiario(false);
  };

  const sendPayees = async(e) => {
    e.preventDefault();
    updateBeneficiario
      ? dispatch(updateBeneficiarioInArray(values))
      : dispatch(putDataBeneficiarios([values]));
    cerrarModal();
  }

  return (
    <div className={style.Backdrop} onClick={cerrarModal}>
      <form
        onSubmit={sendPayees}
        className={style.container}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className={style.title}>{updateBeneficiario ? 'Actualizar' : 'Registro de'} Beneficiario</h1>

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
            disabled={updateBeneficiario}
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
