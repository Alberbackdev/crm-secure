"use client"
import { useRouter } from 'next/navigation'
import style from './formResponsable.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useForm } from '@/src/utils/useForm';
import { dataToCreate, resetState } from '@/src/redux/slices/ventasSlice/responsableReducer';

function FormResponsable() {
    const [error, setError] = useState("");
    const valuesResponsable = useSelector((state) => state.responsable.data); // state es el reducer y con el punto se accede al nombre se accede al slice
    const router = useRouter();
    const dispatch = useDispatch();

    //console.log(poliza);
    //llama a la funcion para actualizar el estado del input
    const { values, handleInputChange, reset } = useForm(valuesResponsable);

    //actua como actualizador y reseteo de forms
    const sendResponsable = (ev) => {
      ev.preventDefault();
      dispatch(dataToCreate(values));
      router.push("/ventas/servicio"); //next page process
      //   const res = await createClientAction(ev, values, reset);
      //   console.log(res);
      //   //const {data} = await res.json();
    };

    const cancelButton = () => {
      reset();
      dispatch(resetState());
      router.push("/ventas/difunto");
    };

    //cambiar los name de cada input para coincidir con los values del reducer y lo mismo con el formDifunto
  return (
    <div className={style.container}>
      <form onSubmit={sendResponsable} className={style.formContent}>
        <h1 className={style.title}>Ingrese los Datos</h1>
        <div className={`${style.group} ${style.flexInputs}`}>
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
        <div className={`${style.group} ${style.flexInputs}`}>
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
            <label>Numero de Telefono</label>
            <input
              name="telefono"
              type="text"
              placeholder="0416-80762846"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.telefono}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${style.group} ${style.flexInputs}`}>
          <div className={style.groupChild}>
            <label>Parentesco</label>
            <input
              name="parentesco"
              type="text"
              placeholder="Madre"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.parentesco}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Dirección</label>
            <input
              name="direccion"
              type="text"
              placeholder="Av. Libertador, Santa rosa."
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.direccion}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${style.full_input} ${style.divtypeRadio}`}>
          <label>Tiene seguro el difunto</label>
          <div className={`${style.typeRadio}`}>
            <label htmlFor="si">Si</label>
            <input
              name="seguro_difunto"
              type="radio"
              id="si"
              onChange={() => {
                document.getElementById("segurodifunto").disabled = false;
              }}
            />
          </div>
          <div className={`${style.typeRadio}`}>
            <label htmlFor="no">No</label>
            <input
              name="seguro_difunto"
              type="radio"
              id="no"
              checked
              onChange={() => {
                document.getElementById("segurodifunto").disabled = true;
              }}
            />
          </div>
        </div>
        <div className={style.full_input}>
          <label>Nombre del Seguro</label>
          <input
            name="segurodifunto"
            type="text"
            placeholder="Basico"
            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.segurodifunto}
            id="segurodifunto"
            disabled
            onChange={handleInputChange}
          />
        </div>
        <div className={style.buttons}>
          <button type="button" className="btn-primary" onClick={cancelButton}>
            Atras
          </button>
          <button type="submit" className="btn-primary">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormResponsable