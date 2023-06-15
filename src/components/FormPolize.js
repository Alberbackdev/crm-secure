import React, { useState } from "react";
import { useForm } from "../utils/useForm";
import { createPolizeAction } from "../services/polizaServices";
import Select from "react-select";
import { CityOptions, TypePolizeOptions, VendedoresOptions } from "../utils/optionsForm";



//This is form for new client

export const FormPolize = () => {
    //llama a la funcion para actualizar el estado del input
    const { values, handleInputChange, reset } = useForm({ type_polize: "", seller: "", dateofcontract: "", city_contract: "" })
    //actua como actualizador y reseteo de forms
    const sendPolize = (ev) => createPolizeAction(ev, values, reset)

    
    const tiposLabel = TypePolizeOptions.map((l, i) => <option value={l.value} selected key={i} >{l.label}</option>)
    const vendedorLabel = VendedoresOptions.map((l, i) => <option value={l.value} selected key={i} >{l.label}</option>)
    const cityContractLabel = CityOptions.map((l, i) => <option value={l.value} selected key={i} >{l.label}</option>)

    return (
        <div className="max-w-screen-md border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6">
                <form onSubmit={sendPolize} className="sm:col-span-8">
                    <h1 className="text-base font-semibold leading-7 text-gray-900">Ingrese los Datos de la Poliza</h1>
                    
                    <div className="col-span-full">
                        <label>Tipo de Plan</label>
                        <div class="mt-2">
                            <select
                                name="type_polize" 
                                autocomplete="type_polize" 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={values.type_polize}
                                onChange={handleInputChange}>
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
                                autocomplete="seller"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={values.seller}
                                onChange={handleInputChange}>
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
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.dateofcontract}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-span-full">
                        <label>Ciudad</label>
                        <select
                            name="city_contract"
                            type="text"
                            placeholder="Av. 6 entre calles 9 y 10 al aldo de x por y carea"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.city_contract}
                            onChange={handleInputChange}>
                                {
                                    cityContractLabel
                                }
                            </select>
                    </div>

                    <button type="submit" className="btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
};
