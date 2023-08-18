"use client";

import { useRouter, useParams } from "next/navigation";

import style from "./formClientData.module.css";
import { useForm } from "@/src/utils/useForm";
import { createClientAction } from "@/src/services/clienteServices";
import { useEffect, useState } from "react";

//This is form for new client

export const FormClientData = ({poliza}) => {
  const [error, setError] = useState("");
  const router = useRouter();
  const params = useParams();
  const { codigoPoliza, _id } = poliza
  console.log( codigoPoliza,  _id);
  //llama a la funcion para actualizar el estado del input
  const { values, handleInputChange, reset } = useForm({polize: _id, name: "", lastname: "", cidentified: "", addres: "", phone: "", dateofbirth: "",})
  console.log(values);
  //actua como actualizador y reseteo de forms
  const sendClient = async (ev) => {
    try {
      //console.log(values);
      const res = await createClientAction(ev, values, reset);
      console.log(res);
      //const {data} = await res.json();

      if (res.status === 201) {
        router.push(
          `/clientes/poliza/?codigoPoliza=${poliza.codigoPoliza}&idCliente=${res.data.data._id}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <div className={style.container}>
      <form onSubmit={sendClient} className={style.formContent}>
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1 className={style.title}>
          {!params.id ? "Nuevo Cliente" : "Actualizar Cliente"}
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
            placeholder="Av. 6 entre calles 9 y 10 al aldo de..."
            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.addres}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.group}>
          <div className={style.groupChild}>
            <label>Cedula de Identidad</label>
            <input
              name="cidentified"
              type="number"
              placeholder="V- 12345678"
              className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.cidentified}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label> Numero de Telefono</label>
            <input
              name="phone"
              type="number"
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
            onClick={() => {
              reset();
              router.push("/clientes");
            }}
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
