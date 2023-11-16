"use client";
import { useRouter } from "next/navigation";
import style from "./FormDifunto.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataToCreate,
  resetState,
} from "@/src/redux/slices/ventasSlice/ventaReducer";
import { useForm } from "@/src/utils/useForm";

function FormDifunto() {
  const [error, setError] = useState("");
  const valuesVentas = useSelector((state) => state.ventas.data); // state es el reducer y con el punto se accede al nombre se accede al slice
  const router = useRouter();
  const dispatch = useDispatch();

  //console.log(poliza);
  //llama a la funcion para actualizar el estado del input
  const { values, handleInputChange, reset } = useForm(valuesVentas);

  //actua como actualizador y reseteo de forms
  const sendDifunto = (ev) => {
    ev.preventDefault();
    dispatch(dataToCreate(values));
    router.push("/ventas/responsable");
    //   const res = await createClientAction(ev, values, reset);
    //   console.log(res);
    //   //const {data} = await res.json();
  };

  const cancelButton = () => {
    reset();
    dispatch(resetState());
    router.push("/ventas");
  };

  return (
    <div className={style.container}>
      <form onSubmit={sendDifunto} className={style.formContent}>
        <h1 className={style.title}>Ingrese los Datos</h1>
        <div className={`${style.group} ${style.threeInputs}`}>
          <div className={style.groupChild}>
            <label>Nombres y Apellidos</label>
            <input
              name="name"
              type="text"
              placeholder="Maria Grabiela Garcia Moron"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>N° Orden de Servicio</label>
            <input
              name="name"
              type="text"
              placeholder="0448"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className={`${style.group} ${style.threeInputs}`}>
          <div className={style.groupChild}>
            <label>Cedula de Identidad</label>
            <input
              name="name"
              type="text"
              placeholder="V-57581234"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Fecha de Nacimiento</label>
            <input
              name="lastname"
              type="date"
              placeholder="Apellidos"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.lastname}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${style.group} ${style.threeInputs}`}>
          <div className={`${style.groupChild} ${style.typeNumber}`}>
            <label>Edad</label>
            <input
              name="name"
              type="number"
              min={0}
              placeholder="0"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={`${style.groupChild} ${style.typeNumber}`}>
            <label>N° Hijos</label>
            <input
              name="lastname"
              type="number"
              placeholder="0"
              min={0}
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Nombre del Conyugue</label>
            <input
              name="lastname"
              type="text"
              placeholder="Nombre del Conyugue"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.lastname}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={style.full_input}>
          <label>Dirección donde vivia</label>
          <input
            name="name"
            type="text"
            placeholder="Av. Libertador, Santa rosa."
            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.full_input}>
          <label>Lugar donde Fallecio</label>
          <input
            name="name"
            type="text"
            placeholder="Av. Libertador, Santa rosa."
            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.buttons}>
          <button type="button" className="btn-primary" onClick={cancelButton}>
            Cancelar
          </button>
          <button type="submit" className="btn-primary">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormDifunto;
