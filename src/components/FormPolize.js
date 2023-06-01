import React, { useState } from "react";
import axios from "axios";

//This is form for new client

export const FormPolize = () => {
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
        <div className="max-w-screen-md border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6">
                <form onSubmit={createPolize} className="sm:col-span-8">
                    <h1 className="text-base font-semibold leading-7 text-gray-900">Ingrese los Datos de la Poliza</h1>
                    
                    <div className="col-span-full">
                        <label>Tipo de Plan</label>
                        <div class="mt-2">
                            <select 
                                id="type_polize" 
                                name="type_polize" 
                                autocomplete="type_polize" 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={type_polize}
                                onChange={(ev) => setType_polize(ev.target.value)}>
                                <option value='Basico'>Basico</option>
                                <option>Especial</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label>Nombre del Cobrador/Vendedor</label>
                        <div class="mt-2">
                            <select
                                id="seller"
                                name="seller"
                                autocomplete="seller"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={seller}
                                onChange={(ev) => setSeller(ev.target.value)}>
                                <option>Basico</option>
                                <option>Especial</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label>Fecha de Contrato</label>
                        <input
                            type="date"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={dateofcontract}
                            onChange={(ev) => setDateofcontract(ev.target.value)}
                        />
                    </div>

                    <div className="col-span-full">
                        <label>Ciudad</label>
                        <input
                            type="text"
                            placeholder="Av. 6 entre calles 9 y 10 al aldo de x por y carea"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={city_contract}
                            onChange={(ev) => setCity_contract(ev.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-primary">
                        Siguiente
                    </button>
                </form>
            </div>
        </div>
    );
};
