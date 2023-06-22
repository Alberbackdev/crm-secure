import React, { useState } from "react";
import axios from "axios";
import style from './FormBeneficiario.module.css'

//This is form for new client

export const FormBeneficiario = ({setModalFormBeneficiario}) => {
    const [name_payee, setName_payee] = useState("");
    const [cidentified_payee, setCidentified_payee] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [age_payee, setAge_payee] = useState("");

    async function createPayees(ev) {
        ev.preventDefault();
        const data = { name_payee, cidentified_payee, dateofbirth, age_payee };
        await axios.post("../api/clientes/clientes", data);
    }

    const cerrarModal = () => {
        // usar la funcion reset para limpiar el estado
        setModalFormBeneficiario(false);
    }

    return (
        <div className={style.Backdrop} onClick={cerrarModal}>
              <form onSubmit={createPayees} className={style.container} onClick={(e) => e.stopPropagation()}>
                    <h1 className={style.title}>Registro de Beneficiario</h1>
                    
                    <div className={style.field}>
                        <label>Nombre y Apellido</label>
                        <input
                            type="text"
                            placeholder="Nombre Completo"
                            className={style.inputForm}
                            value={name_payee}
                            onChange={(ev) => setName_payee(ev.target.value)}
                        />
                    </div>

                    <div className={style.field}>
                        <label>Cedula de Identidad</label>
                        <input
                            type="text"
                            placeholder="V- 12345678"
                            className={style.inputForm}
                            value={cidentified_payee}
                            onChange={(ev) => setCidentified_payee(ev.target.value)}
                        />
                    </div>

                    <div className={style.field}>
                        <label>Edad</label>
                        <input
                            type="number"
                            placeholder="18"
                            className={style.inputForm}
                            value={age_payee}
                            onChange={(ev) => setAge_payee(ev.target.value)}
                        />
                    </div>

                    <div className={style.field}>
                        <label>Fecha de Nacimiento</label>
                        <input
                            type="date"
                            className={style.inputForm}
                            value={dateofbirth}
                            onChange={(ev) => setDateofbirth(ev.target.value)}
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
