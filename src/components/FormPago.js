import React, { useState } from "react";
import { useForm } from "../utils/useForm";
import { createPolizeAction } from "../services/polizaServices";
import Select from "react-select";
import { TypePolizeOptions, VendedoresOptions } from "../utils/optionsForm";
import { createPagoAction } from "../services/pagoServices";



//This is form for new client

export const FormPago = () => {
    //llama a la funcion para actualizar el estado del las entradas

    const { values, handleInputChange, reset } = useForm({ type_polize: "", seller: "", dateofcontract: "", city_contract: "" })
    //actua como actualizador y reseteo de forms
    const sendPolize = (ev) => createPagoAction(ev, values, reset)


    const tiposLabel = TypePolizeOptions.map((l, i) => <option value={l.value} key={i}>{l.label}</option>)
    const vendedorLabel = VendedoresOptions.map((l, i) => <option value={l.value} key={i} >{l.label}</option>)

    return (
        <div className="max-w-screen-md pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6">
                <form onSubmit={sendPolize} className="sm:col-span-8">
                    <h1 className="text-base font-semibold leading-7 text-gray-900">Ingrese los Datos de la Poliza</h1>

                    <div className="col-span-full">
                        <label>Tipo de Plan</label>
                        <div class="mt-2">
                            <select
                                name="type_polize"
                                autocomplete="type_polize"
                                required
                                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={values.type_polize}
                                onChange={handleInputChange}>
                                <option>Seleccione...</option>
                                {
                                    tiposLabel
                                }
                            </select>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label>Nombre del Cobrador/Vendedor</label>
                        <div class="mt-2">
                            <select
                                name="seller"
                                required
                                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={values.seller}
                                onChange={handleInputChange}>
                                <option>Seleccione...</option>
                                {
                                    vendedorLabel
                                }

                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label>Fecha de Contrato</label>
                        <input
                            name="dateofcontract"
                            type="date"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.dateofcontract}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-span-full">
                        <label>Lugar de Contrato</label>
                        <input
                            name="city_contract"
                            type="text"
                            placeholder="Valera"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.city_contract}
                            onChange={handleInputChange} />
                    </div>

                    <button type="submit" className="btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
};
