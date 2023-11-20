"use client";
import { useRouter } from "next/navigation";
import style from "./FormDifunto.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "@/src/utils/useForm";
import { dataDifuntoToCreate, resetDifuntoSlice } from "@/src/redux/slices/ventasSlice/difuntoReducer";
//import { dataToCreate, resetState } from "@/src/redux/slices/ventasSlice/difuntoReducer";
//putDataDifuntoToUpdate, resetDifuntoSlice, dataDifuntoToCreate;
function FormDifunto() {
  const [error, setError] = useState("");
  const valuesDifunto = useSelector((state) => state.difunto.data); // state es el reducer y con el punto se accede al nombre se accede al slice
  const router = useRouter();
  const dispatch = useDispatch();

  //console.log(poliza);
  //llama a la funcion para actualizar el estado del input
  const { values, handleInputChange, reset } = useForm(valuesDifunto);

  //actua como actualizador y reseteo de forms
  const sendDifunto = (ev) => {
    ev.preventDefault();
    dispatch(dataDifuntoToCreate(values));
    router.push("/ventas/responsable");
    //   const res = await createClientAction(ev, values, reset);
    //   console.log(res);
    //   //const {data} = await res.json();
  };

  const cancelButton = () => {
    reset();
    dispatch(resetDifuntoSlice());
    router.push("/ventas");
  };

  return (
    <div className={style.container}>
      <form onSubmit={sendDifunto} className={style.formContent}>
        <h1 className={style.title}>Ingrese los Datos</h1>

        <div className={style.groupChild}>
          <label>Nombres y Apellidos</label>
          <input
            name="fullname"
            type="text"
            placeholder="Maria Grabiela Garcia Moron"
            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.fullname}
            onChange={handleInputChange}
          />
        </div>

        <div className={`${style.group} ${style.threeInputs}`}>
          <div className={style.groupChild}>
            <label>Cedula de Identidad</label>
            <input
              name="cidentified"
              type="text"
              placeholder="V-57581234"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.cidentified}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Fecha de Nacimiento</label>
            <input
              name="dateofbirth"
              type="date"
              placeholder="Apellidos"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.dateofbirth}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${style.group} ${style.threeInputs}`}>
          <div className={`${style.groupChild} ${style.typeNumber}`}>
            <label>Edad</label>
            <input
              name="edad"
              type="number"
              min={0}
              placeholder="0"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.edad}
              onChange={handleInputChange}
            />
          </div>
          <div className={`${style.groupChild} ${style.typeNumber}`}>
            <label>N° Hijos</label>
            <input
              name="nrohijos"
              type="number"
              placeholder="0"
              min={0}
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.nrohijos}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Nombre del Conyugue</label>
            <input
              name="nameconyugue"
              type="text"
              placeholder="Nombre del Conyugue"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.nameconyugue}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={style.full_input}>
          <label>Dirección donde vivia</label>
          <input
            name="direccion"
            type="text"
            placeholder="Av. Libertador, Santa rosa."
            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.direccion}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.full_input}>
          <label>Lugar donde Fallecio</label>
          <input
            name="lugarfallecimiento"
            type="text"
            placeholder="Av. Libertador, Santa rosa."
            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.lugarfallecimiento}
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
