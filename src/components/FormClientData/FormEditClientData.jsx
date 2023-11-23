"use client";
import { useRouter } from "next/navigation";

import style from "./formClientData.module.css";
import { useForm } from "@/src/utils/useForm";
import { updateClientAction } from "@/src/services/clienteServices";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { resetClientSlice } from '@/src/redux/slices/clientReducer'
import { getPolizeAPI } from "@/src/services/polizaServices"
import { putDataPolizaToUpdate } from "@/src/redux/slices/polizaReducer"
import { getBeneficiariosAPI } from "@/src/services/payeesServices"
import { putDataBeneficiarios } from "@/src/redux/slices/beneficiarioReducer"

//This is form for new client

export const FormEditClientData = ({ params }) => {
    const [error, setError] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();


    const { updatedAt, createdAt, ...rest } = useSelector((state) => state.client.data);
    const { values, handleInputChange, reset } = useForm(rest); //llama a la funcion para actualizar el estado del input
    
    const putClient = async (ev) => { //actua como actualizador y reseteo de forms
        ev.preventDefault();
        try {
 
            const res = await updateClientAction(values);
            console.log(res);
        
            if (res.status === 200) {
                console.log('El registro se actualizó correctamente.');
                router.push(`/clientes/poliza`);
            } else {
                console.log('Ocurrió un error al actualizar el registro.')
            }
        } catch (error) {
            console.log(error);
        }
    };

    const cancelButton = () => {
        reset();
        dispatch(resetClientSlice())
        router.push("/clientes");
    }

    useEffect(() => {        
        async function getPolizeAndBeneficiariosByuser() {
            const {data} = await getPolizeAPI(values._id); //Obtener data de la poliza del cliente a editar.
            const {data: beneficiarios} = await getBeneficiariosAPI(values._id);
            dispatch(putDataBeneficiarios(beneficiarios.data));
            dispatch(putDataPolizaToUpdate(data.data))
        }
        getPolizeAndBeneficiariosByuser()
    }, []);

    return (
        <div className={style.container}>
            <form onSubmit={putClient} className={style.formContent}>
                {error && <div className="p-2 mb-2 text-white bg-red-500">{error}</div>}
                <h1 className={style.title}>
                    Actualizar Cliente
                </h1>
                <div className={style.group}>
                    <div className={style.groupChild}>
                        <label>Nombres</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Patricia Godoy"
                            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                            value={values.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={style.groupChild}>
                        <label>Apellido</label>
                        <input
                            name="lastname"
                            type="text"
                            placeholder="Apellidos"
                            className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                            value={values.lastname}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={style.full_input}>
                    <label>Fecha de Nacimiento</label>
                    <input
                        name="dateofbirth"
                        type="date"
                        className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={values.dateofbirth}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={style.full_input}>
                    <label>Direccion</label>
                    <input
                        name="addres"
                        type="text"
                        required
                        placeholder="Av. 6 entre calles 9 y 10 al aldo de..."
                        className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.addres}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={style.group}>
                    <div className={style.groupChild}>
                        <label>Cédula</label>
                        <input
                            name="cidentified"
                            type="number"
                            required
                            placeholder="V- 12345678"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.cidentified}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={style.groupChild}>
                        <label>Teléfono</label>
                        <input
                            name="phone"
                            type="number"
                            required
                            placeholder="+58 04247894561"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={style.buttons}>
                    <button
                        type="button"
                        className="btn-primary"
                        onClick={cancelButton}
                    >
                        Cancelar
                    </button>
                    <button type="submit" className="btn-primary">
                        Siguiente
                    </button>
                </div>
            </form>
        </div>
    );
};
