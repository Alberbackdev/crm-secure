'use client'

import { useForm } from "../../utils/useForm";
import { createPayeeAction } from "../../services/payeesServices";
import style from './FormBeneficiario.module.css'
 
//This is form for new client

export const FormBeneficiario = ({setModalFormBeneficiario}) => {

    //llama a la funcion para actualizar el estado del input
    const { values, handleInputChange, reset } = useForm({ name_payee: "", cidentified_payee: "", age_payee: "", dateofbirth: "" })
    //actua como actualizador y reseteo de forms
    const sendPayees = (ev) => createPayeeAction(ev, values, reset)

    const cerrarModal = () => {
        // usar la funcion reset para limpiar el estado
        setModalFormBeneficiario(false);
    }

    return (
        <div className={style.Backdrop} onClick={cerrarModal}>
            <form onSubmit={sendPayees} className={style.container} onClick={(e) => e.stopPropagation()}>
                <h1 className={style.title}>Registro de Beneficiario</h1>
                
                <div className={style.field}>
                    <label>Nombre y Apellido</label>
                    <input
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