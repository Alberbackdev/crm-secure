import React, { useState } from "react";
import axios from "axios";

//This is form for new client

export const FormPayees = () => {
    const [name_payee, setName_payee] = useState("");
    const [cidentified_payee, setCidentified_payee] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [age_payee, setAge_payee] = useState("");

    async function createPayees(ev) {
        ev.preventDefault();
        const data = { name_payee, cidentified_payee, dateofbirth, age_payee };
        await axios.post("../api/clientes/clientes", data);
    }

    return (
        <div className="max-w-screen-md border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6">
                <form onSubmit={createPayees} className="sm:col-span-8">
                    <h1 className="text-base font-semibold leading-7 text-gray-900">Beneficiarios</h1>
                    
                    <div className="sm:col-span-3">
                        <label>Nombre y Apellido</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                placeholder="fullName"
                                className="block w-full rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={name_payee}
                                onChange={(ev) => setName_payee(ev.target.value)}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                        <label>Cedula de Identidad</label>
                        <input
                            type="text"
                            placeholder="V- 12345678"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={cidentified_payee}
                            onChange={(ev) => setCidentified_payee(ev.target.value)}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label>Edad</label>
                        <input
                            type="number"
                            placeholder="18"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={age_payee}
                            onChange={(ev) => setAge_payee(ev.target.value)}
                        />
                    </div>

                    <div className="col-span-full">
                        <label>Fecha de Nacimiento</label>
                        <input
                            type="date"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={dateofbirth}
                            onChange={(ev) => setDateofbirth(ev.target.value)}
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
