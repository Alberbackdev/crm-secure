import React, { useState } from "react";
import { useForm } from "../utils/useForm";
import { createClientAction } from "../services/clienteServices";

//This is form for new client

export const FormPayees = () => {
    //llama a la funcion para actualizar el estado del input
    const { values, handleInputChange, reset } = useForm({ name_payee: "", cidentified_payee: "", age_payee: "", dateofbirth: "" })
    //actua como actualizador y reseteo de forms
    const sendPayees = (ev) => createClientAction(ev, values, reset)

    return (
        <div className="max-w-screen-md border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6">
                <form onSubmit={sendPayees} className="sm:col-span-8">
                    <h1 className="text-base font-semibold leading-7 text-gray-900">Beneficiarios</h1>
                    
                    <div className="sm:col-span-3">
                        <label>Nombre y Apellido</label>
                        <div className="mt-2">
                            <input
                                name="name_payee"
                                type="text"
                                placeholder="fullName"
                                className="block w-full rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={values.name_payee}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                        <label>Cedula de Identidad</label>
                        <input
                            name="cidentified_payee"
                            type="text"
                            placeholder="V-12345678"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.cidentified_payee}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label>Edad</label>
                        <input
                            name="age_payee"
                            type="number"
                            placeholder="18"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.age_payee}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-span-full">
                        <label>Fecha de Nacimiento</label>
                        <input
                            name="dateofbirth"
                            type="date"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.dateofbirth}
                            onChange={handleInputChange}
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
