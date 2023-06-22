import React, { useState } from "react";
import { useForm } from "../utils/useForm";
import { createPolizeAction } from "../services/polizaServices";
import Select from "react-select";

import { createPagoAction } from "../services/pagoServices";
import { FormatoPagoOptions } from "../utils/optionsForm";
import Link from "next/link";



//This is form for new client

export const FormPago = () => {
    //llama a la funcion para actualizar el estado del las entradas

    const { values, handleInputChange, reset } = useForm({ type_pay: "", number_pay: "", date_pay: "", type_of_change: "", month_pay: [], status_pay: "", full_payment_bs: "", full_payment_dollar: "" })
    //actua como actualizador y reseteo de forms
    const sendPago = (ev) => createPagoAction(ev, values, reset)


    const FormatoPago = FormatoPagoOptions.map((l, i) => <option value={l.value} key={i}>{l.label}</option>)
    /*const vendedorLabel = VendedoresOptions.map((l, i) => <option value={l.value} key={i} >{l.label}</option>) */

    return (
        <div className="max-w-screen-md pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6">
                <form onSubmit={sendPago} className=" max-w-sm sm:col-span-8">
                    <h1 className="text-base font-semibold leading-7 text-gray-900">Ingrese los Datos de la Poliza</h1>

                    <div className="col-span-full">
                        <label>Formato de Pago</label>
                        <div class="mt-2">
                            <select
                                name="type_pay"
                                autocomplete="type_pay"
                            
                                className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-28 sm:text-sm sm:leading-6"
                                value={values.type_pay}
                                onChange={handleInputChange}>
                                <option>Seleccione...</option>
                                {
                                    FormatoPago
                                }
                            </select>
                            <input
                                name="number_pay"
                                type="text"
                                placeholder="123456789"
                            
                                className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-52 sm:text-sm sm:leading-6"
                                value={values.number_pay}
                                onChange={handleInputChange} />
                        </div>
                    </div>

                    {/* <div className="col-span-full">
                        <label>Nombre del Cobrador/Vendedor</label>
                        <div class="mt-2">
                            <select
                                name="seller"
                            
                                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={values.seller}
                                onChange={handleInputChange}>
                                <option>Seleccione...</option>
                                {
                                    vendedorLabel
                                }

                            </select>
                        </div>
                    </div> */}
                    <div className="sm:col-span-3">
                        <label>Fecha de Contrato</label>
                        <input
                            name="date_pay"
                            type="date"
                        
                            className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.date_pay}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-span-full">
                        <label>Lugar de Contrato</label>
                        <input
                            name="city_contract"
                            type="text"
                            placeholder="Valera"
                        
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.city_contract}
                            onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Enero</label>
                        <input
                            name="month_pay"
                            type="checkbox"
                            value={values.month_pay}
                            onChange={handleInputChange} />
                        <label>Febrero</label>
                        <input
                            name="month_pay"
                            type="checkbox"
                            value={values.month_pay}
                            onChange={handleInputChange} />
                        <label>Marzo</label>
                        <input
                            name="month_pay"
                            type="checkbox"
                            value={values.month_pay}
                            onChange={handleInputChange} />
                    </div>
                    <button type="submit" className="btn-primary">
                        Guardar
                    </button>
                </form>
                <Link href={"/clientes/confirmacion"}>
                    <button type="submit" className="btn-primary">
                        Confirmar
                    </button>
                </Link>
            </div>
        </div>
    );
};
