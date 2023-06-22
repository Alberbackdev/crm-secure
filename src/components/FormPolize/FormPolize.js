import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import style from './formPolize.module.css'

//This is form for new client

export const FormPolize = () => {
    const router = useRouter()
    const [type_polize, setType_polize] = useState("");
    const [seller, setSeller] = useState("");
    const [dateofcontract, setDateofcontract] = useState("");
    const [city_contract, setCity_contract] = useState("");


    async function createPolize(ev) {
        ev.preventDefault();
        const data = { type_polize, seller, dateofcontract, city_contract};
        await axios.post("../api/clientes/polize", data);
    }


    return (
        <div className={style.container}>
            <form onSubmit={createPolize} className={style.formContent}>
                    <h1 className={style.title}>Ingrese los Datos de la Poliza</h1>
                    
                    <div className={style.field}>
                        <label>Tipo de Plan</label>
                        <select 
                            id="type_polize" 
                            name="type_polize" 
                            autocomplete="type_polize" 
                            className={style.inputForm}
                            value={type_polize}
                            onChange={(ev) => setType_polize(ev.target.value)}>
                            <option value='Basico'>Basico</option>
                            <option>Especial</option>
                        </select>                                        
                    </div>

                    <div className={style.field}>
                        <label>Nombre del Cobrador/Vendedor</label>                       
                        <select
                            id="seller"
                            name="seller"
                            autocomplete="seller"
                            className={style.inputForm}
                            value={seller}
                            onChange={(ev) => setSeller(ev.target.value)}>
                            <option>Basico</option>
                            <option>Especial</option>
                        </select>                   
                    </div>
                    <div className={style.field}>
                        <label>Fecha de Contrato</label>
                        <input
                            type="date"
                            className={style.inputForm}
                            value={dateofcontract}
                            onChange={(ev) => setDateofcontract(ev.target.value)}
                        />
                    </div>

                    <div className={style.field}>
                        <label>Ciudad</label>
                        <input
                            type="text"
                            placeholder="Av. 6 entre calles 9 y 10 al aldo de..."
                            className={style.inputForm}
                            value={city_contract}
                            onChange={(ev) => setCity_contract(ev.target.value)}
                        />
                    </div>

                    <div className={style.buttons}>
                        <button type="button" className="btn-primary" onClick={() => router.push('/clientes/crear')}>
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
